// 訪問者カウンターの実装
document.addEventListener("DOMContentLoaded", function () {
    const visitorCount = localStorage.getItem("visitorCount") || 0;
    const newCount = parseInt(visitorCount) + 1;
    localStorage.setItem("visitorCount", newCount);

    const countElement = document.getElementById("visitorCount");
    countElement.textContent = newCount;

    // リンクをクリックしたときのエフェクト
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            if (this.className === "link-button") {
                alert("申し訳ありません。この機能は工事中です🚧");
                e.preventDefault();
            }
        });
    });
});
