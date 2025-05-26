const holes = document.querySelectorAll(".hole");
let score = 0;
let currentMole = null;
const hitEffect = document.getElementById("hitEffect");

function showMole() {
    if (currentMole) {
        currentMole.classList.remove("show");
    }
    const index = Math.floor(Math.random() * holes.length);
    const mole = holes[index].querySelector(".mole");
    mole.classList.add("show");
    currentMole = mole;
}

document.getElementById("game").addEventListener("click", (e) => {
    if (
        e.target.classList.contains("mole") &&
        e.target.classList.contains("show")
    ) {
        score++;
        document.getElementById("score").textContent = score;
        e.target.classList.remove("show");

        // 軽い演出（バブリングで拾ってbodyに反映する）
        document.body.classList.add("flash");
        showHitEffect();
        setTimeout(() => {
            document.body.classList.remove("flash");
        }, 100);
    }
});

function showHitEffect() {
    hitEffect.classList.remove("hidden");
    setTimeout(() => {
        hitEffect.classList.add("hidden");
    }, 500);
}

setInterval(showMole, 1000);
