// Sample data for the portfolio
const portfolioItems = [
    {
        image: "pcc-rosemary-grilled-salmon-flo.jpg",
        title: "Grilled Salmon",
        description: "A delightful grilled salmon with seasonal vegetables.",
    },
    {
        image: "images (1).jpg",
        title: "Italian Pizza",
        description: "Authentic wood-fired Italian pizza.",
    },
    {
        image: "event.jpg",
        title: "Outdoor Dinner Event",
        description: "A beautifully arranged outdoor dinner setup.",
    },
    {
        image: "Desserts.jpg",
        title: "Chocolate Mousse",
        description: "A rich and creamy chocolate dessert.",
    },
];

// Function to load portfolio items
function loadPortfolio() {
    const portfolioGrid = document.getElementById("portfolioGrid");

    portfolioItems.forEach((item) => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item");

        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

        portfolioGrid.appendChild(portfolioItem);
    });
}

// Load portfolio on page load
document.addEventListener("DOMContentLoaded", loadPortfolio);