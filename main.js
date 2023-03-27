import { getData } from './modules/HTTP.reuest'
import { header } from '/modules/header'
import { cardReload, creatTransactions } from '/modules/ui'
let h1 = document.querySelector('h1')
let h3 = document.querySelector('.gmail')
let cardCont = document.querySelector('.card-container')
let tbody = document.querySelector('tbody')
let spanEml = document.querySelector('.gmail')
let form = document.forms.add_transaction


//////////////////////
let user = JSON.parse(localStorage.getItem('user'))
if (!user) location.assign('/pages/login.html')
header()
h1.innerHTML = `Welcome ${user.name} ${user.surname}`
h3.innerHTML = user.email
spanEml.innerHTML = user.email
//////////////////////

getData("/cards?user_id=" + user.id)
.then(data => cardReload(data, cardCont))
/////////

function postTrans() {
    form.onsubmit = (event) => {
        event.preventDefault();
        
        let trans = {
            user_id: user.id,
            data: '2023-03-27'
        };
        
        let fm = new FormData(form);
        
        fm.forEach((value, key) => {
            trans[key] = value;
        });

        if (trans.card_name && trans. total&& trans.currency) {
            axios.post('http://localhost:3000/transactions', trans)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        window.location.assign("/pages/transaction.html");
                        getData(
                            "/transactions?user_id=" + user.id)
                            .then(res => creatTransactions(res, tbody))                        
                    }
                })
        } else {
            alert("Error");
        }
    }
}

postTrans()



