import axios from "axios"

let tbody = document.querySelector('.transactioons table tbody')

axios.get("http://localhost:3000/transactions")
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            creatTransactions(res)
        }
    })



function creatTransactions(arr) {
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