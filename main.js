import { header } from '/modules/header'
let user = JSON.parse(localStorage.getItem('user'))

if (!user) {
    location.assign('/pages/login.html')
}
header()
let h1 = document.querySelector('h1')

h1.innerHTML = `Welcome ${user.name} ${user.surname}`
let body = document.body

function reload (arr) {
    for(let item of arr) {
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let money = document.createElement('h2')

        div.classList.add('card')

        h1.innerHTML = 'Visa'
        money.innerHTML = 'RUB'

        div.append(h1 , money)
        body.append(div)
    }
}

reload(user)

console.log(user);

colors = [
    {
        id: 1,
        color: ': linear - gradient(84.37deg, #D7816A 2.27 %, #BD4F6C 92.26 %)'
    },
    {
        id: 2,
        color: ': linear - gradient(84.37deg, #D7816A 2.27 %, #BD4F6C 92.26 %)'
    },
    {
        id: 1,
        color: ': linear - gradient(84.37deg, #D7816A 2.27 %, #BD4F6C 92.26 %)'
    },
    {
        id: 2,
        color: ': linear - gradient(84.37deg, #D7816A 2.27 %, #BD4F6C 92.26 %)'
    },
    {
        id: 1,
        color: ': linear - gradient(84.37deg, #D7816A 2.27 %, #BD4F6C 92.26 %)'
    },
    {
        id: 2,
        color: ': linear - gradient(84.37deg, #D7816A 2.27 %, #BD4F6C 92.26 %)'
    }
]

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

// function creatTr () {}