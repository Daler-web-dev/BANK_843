import {header} from '/modules/header'
let user = JSON.parse(localStorage.getItem('user'))

if(!user) {
    location.assign('/pages/login.html')
}
header()
let h1 = document.querySelector('h1')

h1.innerHTML = `Welcome ${user.name} ${user.surname}`



let transactions = document.querySelector('.transactions')

function creatTr () {
    let table = document.createElement('table')
    let tr = document
}

