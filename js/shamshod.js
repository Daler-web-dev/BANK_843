
let CARTS = [1, 2, 3, 4]

let cartMain = document.querySelector('.cartMain')
let hexString = "0123456789abcdef";

let randomColor = () => {
    let hexCode = "#";
    for (i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}



function reload(arr, place) {
    for (let item of arr) {
        let cart = document.createElement('div')
        let cartType = document.createElement('div')
        let cartTypeText = document.createElement("p")
        let money = document.createElement('div')
        let moneyType = document.createElement("p")
        let total = document.createElement("p")

        cartType.classList.add('cartType')
        money.classList.add("money")
        cartTypeText.classList.add("cartTypeText")
        moneyType.classList.add("moneyType")
        total.classList.add("total")
        cart.classList.add('cart')

        cartTypeText.innerText = "VISA"
        moneyType.innerText = "RUB"
        total.innerText = 215


        let generateGrad = () => {
            let colorOne = randomColor();
            let colorTwo = randomColor();
            let angle = Math.floor(Math.random() * 360);
            cart.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
            cart.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
        }
        generateGrad()

        cartType.append(cartTypeText)
        money.append(moneyType, total)
        cart.append(cartType, money)
        place.append(cart)
    }
}

reload(CARTS, cartMain)



