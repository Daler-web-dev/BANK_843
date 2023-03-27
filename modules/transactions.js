import axios from "axios"
import {header} from '/modules/header'

let tbody = document.querySelector('.transactions table tbody')
let user = JSON.parse(localStorage.getItem('user'))

header()

axios.get(import.meta.env.VITE_BASE_URL + "/transactions?user_id=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            creatTransactions(res.data)
        }
    })



export function creatTransactions(arr) {
    for (let item of arr) {
        let tr = document.createElement('tr')
        let idTd = document.createElement('td')
        let cardTd = document.createElement('td')
        let categoryTd = document.createElement('td')
        let priceTd = document.createElement('td')
        let whenTd = document.createElement('td')

        idTd.innerHTML = item.id
        cardTd.innerHTML = item.card
        categoryTd.innerHTML = item.category
        priceTd.innerHTML = item.price
        whenTd.innerHTML = item.when

        tbody.append(tr)
        tr.append(idTd, cardTd, categoryTd, priceTd, whenTd)
    }
}
