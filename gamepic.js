// Sample data of uploaded games
const games = [
    {
        name: "Fire Hours",
        link: "https://example.com/fire-hours"
    },
    {
        name: "Shadow Quest",
        link: "https://example.com/shadow-quest"
    }
];

function searchGames() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchInput)
    );

    if (filteredGames.length > 0) {
        filteredGames.forEach(game => {
            const item = document.createElement("div");
            item.classList.add("result-item");
            item.textContent = game.name;
            item.onclick = () => window.open(game.link, "_blank");
            resultsContainer.appendChild(item);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found</p>";
    }
}
