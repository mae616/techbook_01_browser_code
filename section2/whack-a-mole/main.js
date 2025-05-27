// ========================
// 変数・初期設定
// ========================

const holes = document.querySelectorAll(".hole");
let score = 0;
let currentMole = null;

const hitEffect = document.getElementById("hitEffect");
const startButton = document.getElementById("startButton");
const timerDisplay = document.getElementById("timer");

let gameInterval = null;
let gameTime = 30;
let countdownInterval = null;

// ========================
// モグラを出す関数
// ========================

function showMole() {
    // 前回のモグラが表示されていたら隠す（ただしヒット中は無視）
    if (currentMole && !currentMole.classList.contains("hit")) {
        currentMole.classList.remove("show");
        currentMole.src = "./images/mole_normal.png";
    }

    // ランダムにモグラを表示
    const index = Math.floor(Math.random() * holes.length);
    const mole = holes[index].querySelector(".mole");

    // 状態リセット
    mole.classList.remove("hit");
    mole.src = "./images/mole_normal.png";
    mole.classList.add("show");
    currentMole = mole;
}

// ========================
// クリックイベント（バブリング）
// ========================

document.getElementById("game").addEventListener("click", (e) => {
    if (
        e.target.classList.contains("mole") &&
        e.target.classList.contains("show") &&
        !e.target.classList.contains("hit") // すでに叩かれた状態なら無視
    ) {
        // スコア更新
        score++;
        document.getElementById("score").textContent = score;

        // ヒット状態に切り替え
        e.target.classList.add("hit");
        e.target.src = "./images/mole_hit.png";

        // エフェクト表示
        document.body.classList.add("flash");
        showHitEffect();

        setTimeout(() => {
            document.body.classList.remove("flash");
        }, 100);

        // しばらくしてからモグラを非表示にする
        setTimeout(() => {
            e.target.classList.remove("show", "hit");
            e.target.src = "./images/mole_normal.png";
        }, 400);
    }
});

// ========================
// エフェクト表示
// ========================

function showHitEffect() {
    hitEffect.classList.remove("hidden");
    setTimeout(() => {
        hitEffect.classList.add("hidden");
    }, 500);
}

// ========================
// スタート処理
// ========================

startButton.addEventListener("click", () => {
    score = 0;
    document.getElementById("score").textContent = score;
    gameTime = 30;
    timerDisplay.textContent = gameTime;

    gameInterval = setInterval(showMole, 1000);

    countdownInterval = setInterval(() => {
        gameTime--;
        timerDisplay.textContent = gameTime;

        if (gameTime <= 0) {
            clearInterval(gameInterval);
            clearInterval(countdownInterval);
            if (currentMole) currentMole.classList.remove("show", "hit");
            alert("ゲーム終了！スコア: " + score);
        }
    }, 1000);
});
