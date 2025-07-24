//TAB SLIDER homework 3

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentIndex = 0;
let autoSwitch;

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

const startAutoSwitch = () => {
    autoSwitch = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabContentBlocks.length
        hideTabContent()
        showTabContent(currentIndex)
    }, 3000)
}

hideTabContent()
showTabContent()
startAutoSwitch()

let timeout

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, i) => {
            if (event.target === item) {
                clearInterval(autoSwitch)
                clearTimeout(timeout)
                hideTabContent()
                showTabContent(i)
                currentIndex = i
                timeout = setTimeout(startAutoSwitch, 1000)
            }
        })
    }
}


//CONVERTER Homework 5

const currencyInputs = document.querySelectorAll('input')
let exchangeRates = {}

const fetchRates = async () => {
    try {
        const response = await fetch('../data/converter.json')
        exchangeRates = await response.json()
    } catch (error) {
        console.error('Incorrect exchange rate:', error)
    }
}

const convert = (changedInput) => {
    const value = parseFloat(changedInput.value) || 0
    if (!exchangeRates.usd || !exchangeRates.eur) return

    const rates = {
        som: 1,
        usd: 1 / exchangeRates.usd,
        eur: 1 / exchangeRates.eur
    }

    const baseValue = value / rates[changedInput.id]

    currencyInputs.forEach(input => {
        if (input !== changedInput) {
            input.value = (baseValue * rates[input.id]).toFixed(2)
        }
    })
}

const addEventListeners = () => {
    currencyInputs.forEach(input => {
        input.addEventListener('input', () => convert(input))
    })
}

fetchRates().then(addEventListeners)


//CARD SWITCHER Задание 6/1

const cardBlock = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let cardId = 1;
const maxCardId = 200;

const loadCard = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: Пост не найден`);
        }

        const data = await response.json();

        cardBlock.innerHTML = `
            <p>${data.title}</p>
            <p>${data.completed ? '':''}</p>
            <span>ID: ${data.id}</span>
        `;

    } catch (error) {
        console.error(error);
        cardBlock.innerHTML = `<p style="color: red;">Ошибка загрузки данных</p>`;
    }
};

btnNext.onclick = () => {
    cardId = cardId >= maxCardId ? 1 : cardId + 1;
    loadCard(cardId);
};

btnPrev.onclick = () => {
    cardId = cardId <= 1 ? maxCardId : cardId - 1;
    loadCard(cardId);
};

loadCard(cardId);


