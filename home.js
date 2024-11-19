function themeController() {

}

const qq = document.querySelector(".dropdown-content");
function s() {
    qq.style.display = "flex";
}

function c() {
    qq.style.display = "none";
}

function showOrHide() {
    if (qq.style.display === "none") {
        s()
    } else {
        c()
    }
}