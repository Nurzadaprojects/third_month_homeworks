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