document.addEventListener("DOMContentLoaded", () => 
{console.log("Reasons page loaded");
    const cards = document.querySelectorAll(".reason-card");
    cards.forEach(card => {card.addEventListener("click", () => {
        if (card.classList.contains("active")){
            card.classList.remove("active");card.textContent = "❤️";}
            else {cards.forEach(c => {c.classList.remove("active");
                c.textContent = "❤️";});
            card.classList.add("active");card.textContent = card.dataset.reason;}
    });
});
});