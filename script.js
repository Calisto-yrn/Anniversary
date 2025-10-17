document.addEventListener("DOMContentLoaded", () =>
{console.log("Landing page loaded successfully ");});

//fadein effect for memories
document.addEventListener("DOMContentLoaded", () => 
    {console.log("Memories page loaded");});

window.addEventListener("scroll", function () {
        const cards = document.querySelectorAll(".memory-card");
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    });