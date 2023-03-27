import axios from 'axios'
import { getData } from './HTTP.reuest';
import { creatTransactions } from './transactions';
let form = document.forms.add_transaction
let user = JSON.parse(localStorage.getItem('user'))

let select = document.querySelector('.currency')

axios.get(import.meta.env.VITE_BASE_URL + "/cards?user_id=" + user.id )
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            getOptions(res.data)
        }
    })


function getOptions(arr) {
    for (let item of arr) {
        let opt = document.createElement('option')
        opt.innerHTML = item.name
        select.append(opt)
    }
}

form.onsubmit = (event) => {
    event.preventDefault();

    let trans = {
        user_id: user.id
    };

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        trans[key] = value;
    });

    console.log(trans);

    if (trans.card && trans.category && trans.total) {
        axios.post('http://localhost:3000/cards', trans)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    location.assign("/pages/transactions.html");
                }
            })
    } else {
        alert("Error");
    }
}