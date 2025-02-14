function loadPersons() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "persons.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const persons = JSON.parse(xhr.responseText);
                    displayPersons(persons);
                } catch (error) {
                    console.error("Mistake:", error );
                }
            } else {
                console.error("Mistake.Staus:", xhr.status);
            }
        }
    };

    xhr.send();
}

function displayPersons(persons) {
    const container = document.getElementById("personsContainer");
    container.innerHTML = "";

    persons.forEach(person => {
        const card = document.createElement('div');
        card.classList.add("person-card");
        card.innerHTML = `
            <img src="${person.person_photo}" alt="${person.name}">
            <h3>${person.name}</h3>
            <p>Age: ${person.age}</p>
            <p>Job: ${person.job}</p>
        `;
        container.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", loadPersons);
        
  