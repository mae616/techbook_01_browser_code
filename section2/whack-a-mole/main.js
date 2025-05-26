const holes = document.querySelectorAll(".hole");
let score = 0;
let currentMole = null;

function showMole() {
    if (currentMole) {
        currentMole.classList.remove("show");
    }
    const index = Math.floor(Math.random() * holes.length);
    const mole = holes[index].querySelector(".mole");
    mole.classList.add("show");
    currentMole = mole;
}

holes.forEach((hole) => {
    hole.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("mole") &&
            e.target.classList.contains("show")
        ) {
            score++;
            document.getElementById("score").textContent = score;
            e.target.classList.remove("show");
        }
    });
});

setInterval(showMole, 1000);
