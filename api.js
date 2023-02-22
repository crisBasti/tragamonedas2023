function obtenerPersonajesApi(callbackApi) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data => {
        callbackApi(data)
    });
}

obtenerPersonajesApi(data => {
    data.results.forEach(personjes => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
        <div class="image-container">
            <img src="${personjes.image}" alt="Personaje" srcset="">
        </div>

        <h2>${personjes.name}</h2>
        <span>${personjes.status}</span>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
});