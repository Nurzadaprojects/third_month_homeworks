//Вопрос 1
function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6"));

//Вопрос 2
function fibonacciWithDelay(prev = 0, curr = 1) {
    if (curr > 144) return;
    console.log(curr);
    setTimeout(() => fibonacciWithDelay(curr, prev + curr), 1000);
}

fibonacciWithDelay();

//Вопрос 3
async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        data.forEach(product => console.log(product.title));
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProductTitles();

//Вопрос 4
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("div").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            document.body.style.backgroundColor = event.target.textContent;
        }
    });
});

//Вопрос 5
document.addEventListener("DOMContentLoaded", () => {
    const block = document.getElementById("toggleBlock");
    const button = document.getElementById("toggleButton");

    button.addEventListener("click", () => {
        block.style.display = block.style.display === "none" ? "block" : "none";
    });
});

//Вопрос 6
document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const counterElement = document.getElementById("counter");

    const interval = setInterval(() => {
        if (count >= 100) {
            clearInterval(interval);
        } else {
            count++;
            counterElement.textContent = count;
        }
    }, 1);
});


//Вопрос 7
document.getElementById('loadDataButton').addEventListener('click', async function() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
       
        console.log(data);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
});
