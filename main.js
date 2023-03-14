let table = document.querySelector('table')
let inp = document.querySelector('.modal input')
let save = document.querySelector('.modal button')
let modal = document.querySelector('.modal')
let created = document.querySelector('.buttons button')

let items = [
    {
        name: 'mastercard',
        year: "motobike",
        id: 1232312,
        sum: 450000,
        DNEY: "5 ДНЕЙ НАЗАД"
    },
    {
        name: 'visa',
        year: "motobike",
        id: 2434234,
        sum: 320000,
        DNEY: "3 ДНЕЙ НАЗАД"
    },
    {
        name: 'mastercard',
        year: "motobike",
        id: 1231231,
        sum: 120000,
        DNEY: "5 ДНЕЙ НАЗАД"
    },
    {
        name: 'visa',
        year: "motobike",
        id: 234234,
        sum: 990000,
        DNEY: "9 ДНЕЙ НАЗАД"
    },
    {
        name: 'mastercard',
        year:"motobike",
        id: 342423,
        sum: 650000,
        DNEY: "7 ДНЕЙ НАЗАД"
    },
    {
        name: 'visa',
        year: "motobike",
        id: 234234,
        sum: 340000,
        DNEY: "1 ДНЕЙ НАЗАД"
    },
    {
        name: 'mastercard',
        year: "motobike",
        id: 545454,
        sum: 870000,
        DNEY: "8 ДНЕЙ НАЗАД"
        
    },
]

let ID;

const reload = (arr) => {
    for (let item of arr) {
        // create
        let tbody = document.createElement('tbody')
        let tr = document.createElement('tr')
        let th1 = document.createElement('th')
        let th2 = document.createElement('th')
        let th3 = document.createElement('th')
        let th0 = document.createElement("th")
        let th4 = document.createElement('th')
        let th6 = document.createElement('th')
        let img1 = document.createElement('img')
        let img2 = document.createElement('img')

        th1.innerHTML = item.id
        th2.innerHTML = item.name
        th3.innerHTML = item.year
        th6.innerHTML = item.DNEY
        th0.innerHTML = item.sum


        table.append(tbody)
        tbody.append(tr)
        th4.append(img1, img2)
        tr.append(th1, th2, th3, th4, th6, th0)
    }
}
reload(items)
