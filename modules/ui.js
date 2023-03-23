export function cardReload(arr, place) {
    place.innerHTML = ""

    if (arr.length === 0) {
        place.innerHTML = 'Кошелек пуст!'
        return
    }

    for (let item of arr) {
        place.innerHTML += `
            <div class="card-item" id="${item.id}" >
                <h2>${item.name}</h2>
                <h3>${item.total}</h3>
                <span>${item.currency}</span>
            </div>
        `
    }

}