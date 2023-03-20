let user = JSON.parse(localStorage.getItem('user'))

if(!user) {
    location.assign('/pages/login.html')
}

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