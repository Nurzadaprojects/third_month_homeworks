async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        const posts = await response.json();
        renderCards(posts);
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
}

function renderCards(posts) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; 

    posts.slice(0, 8).forEach(post => { 
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="../images/1.jpg" alt="Картинка">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchPosts);