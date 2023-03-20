let user = JSON.parse(localStorage.getItem('user'))

if(!user) {
    location.assign('/pages/login.html')
}

let h1 = document.querySelector('h1')

h1.innerHTML = `Welcome ${user.name} ${user.surname}`
