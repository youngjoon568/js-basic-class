// toggle = 토큰이 있다면 토큰을 제거, 토큰이 없다면 토큰을 추가

const h1 = document.querySelector("div.txt h1");

function txtClick() {
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", txtClick);