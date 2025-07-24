//Homework part1

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.addEventListener('click', () => {
    const email = gmailInput.value.trim();

    if (regExp.test(email)) {
        gmailResult.textContent = "✅ Valid Gmail address";
        gmailResult.style.color = "green";
    } else {
        gmailResult.textContent = "❌ Invalid Gmail address";
        gmailResult.style.color = "red";
    }
});


//Homework part 2

document.addEventListener("DOMContentLoaded", function (){
    const childBlock = document.querySelector(".child_block");
    const parentBlock = document.querySelector(".parent_block");
    let position = 0;
    const step = 5;
    const parentWidth = parentBlock.clientWidth;
    const childWidth = childBlock.clientWidth;

    function moveBlock() {
        if (position + childWidth < parentWidth) {
            position += step;
            childBlock.style.left = `${position}px`;
            requestAnimationFrame(moveBlock);
        }
    }
    moveBlock();
});

//to be continued of part 2

document.addEventListener("DOMContentLoaded", function () {
    const childBlock = document.querySelector(".child_block");
    const parentBlock = document.querySelector(".parent_block");
    let positionX = 0;
    let positionY = 0;
    const step = 5;
    const parentWidth = parentBlock.clientWidth;
    const parentHeight = parentBlock.clientHeight;
    const childWidth = childBlock.clientWidth;
    const childHeight = childBlock.clientHeight;
    let direction = "right";

    function moveBlock() {
        if (direction === "right") {
            if (positionX + childWidth < parentWidth) {
                positionX += step;
            } else {
                direction = "down";
            }
        }

        if (direction === "down") {
            if (positionY + childHeight < parentHeight) {
                positionY += step;
            } else {
                direction = "left";
            }
        }

        if (direction === "left") {
            if (positionX > 0) {
                positionX -= step;
            } else {
                direction = "up";
            }
        }

        if (direction === "up") {
            if (positionY > 0) {
                positionY -= step;
            } else {
                direction = "right";
            }
        }

        childBlock.style.left = `${positionX}px`;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock);
    }

    moveBlock();
});

//Homework 2

document.addEventListener("DOMContentLoaded", function () {
    const secondDisplay = document.getElementById("seconds");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    let seconds = 0;
    let interval = null;

    function startTimer() {
        if (!interval) {
            interval = setInterval(() => {
                seconds++;
                secondDisplay.textContent = seconds;
            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        secondDisplay.textContent = seconds;
    }

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);

})

//Задание 3
document.addEventListener("DOMContentLoaded", loadCharacters);


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    let i = 0;

    const show = n => {
        slides.forEach(s => s.classList.remove('active'));
        slides[n].classList.add('active');
    };

    setInterval(() => {
        i = (i + 1) % slides.length;
        show(i);
    }, 3000);
});


//Homework 4
function loadCharacters() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/characters.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const characters = JSON.parse(xhr.responseText);
                    console.log(characters);
                    displayCharacters(characters);
                } catch (error) {
                    console.error("Ошибка при обработке данных:", error);
                }
            } else {
                console.error("Ошибка запроса, статус:", xhr.status);
            }
        }
    };

    xhr.send();
}

function displayCharacters(characters) {
    const container = document.getElementById("charactersContainer");
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add("character-card");
        card.innerHTML = `
            <img src="${character.character_photo}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Age: ${character.age}</p>
            <p>Job: ${character.job}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadCharacters);


