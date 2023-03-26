import { getData } from './modules/HTTP.reuest'
import { header } from '/modules/header'
import { cardReload, creatTransactions } from '/modules/ui'
let h1 = document.createElement('h1')
let h2 = document.createElement('a')

let userinfo = document.querySelector('.username')

let cardCont = document.querySelector('.card-container')
let tranzaktionCont = document.querySelector('.tranzaktion-container')
let tbody = document.querySelector('tbody')

userinfo.append(h1, h2)

//////////////////////
let user = JSON.parse(localStorage.getItem('user'))
if (!user) location.assign('/pages/login.html')
header()
h2.innerHTML = `${user.email}`
h1.innerHTML = `Добро пожаловать, ${user.name} ${user.surname}!`
//////////////////////

getData("/cards?user_id=" + user.id)
    .then(data => cardReload(data, cardCont))
    .then(data => creatTransactions(data, tranzaktionCont))
/////////

getData("/transactions?user_id=" + user.id)
    .then(res => creatTransactions(res, tbody))
