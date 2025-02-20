document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) { 
            e.preventDefault(); //<--- Prevents the webpage from returning to default light mode
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
