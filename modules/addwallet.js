import axios from 'axios'
import { cardReload } from './ui';
import { getData } from './HTTP.reuest';
export let form = document.forms.add_wallet
let user = JSON.parse(localStorage.getItem('user'))


export function postCard() {
    form.onsubmit = (event) => {
        event.preventDefault();

        let card = {
            user_id: user.id
        };

        let fm = new FormData(form);

        fm.forEach((value, key) => {
            card[key] = value;
        });

        if (card.name && card.currency && card.total) {
            axios.post('http://localhost:3000/cards', card)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        window.location.assign("/pages/wallets.html");
                        getData("/users?cards=" + user.id)
                            .then(data => cardReload(data, cardCont))
                    }
                })
        } else {
            alert("Error");
        }
    }
}

postCard()