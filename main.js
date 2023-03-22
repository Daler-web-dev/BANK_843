import { header } from '/modules/header'
import {colors} from '/modules/db'

let user = JSON.parse(localStorage.getItem('user'))

if (!user) {
    location.assign('/pages/login.html')
}
header()
let h1 = document.querySelector('h1')

h1.innerHTML = `Welcome ${user.name} ${user.surname}`

function reload(arr) {
    for (let item of arr) {
        let i = document.querySelector('.i')
        let cont = document.createElement('div')
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let h3 = document.createElement('h3')

        div.classList.add('card')
        cont.classList.add('container')

        div.style.background = item.color

        h1.innerHTML = 'Visa'
        h3.innerHTML = 'RUB'

        div.append(h1, h3)
        cont.append(div)
        i.append(cont)
    }
}

reload(colors)
