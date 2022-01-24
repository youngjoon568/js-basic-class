// Events

// txet.style.color = "#aaa";
// const txet = document.getElementsByTagName("h1");
// console.log(txet[0]);
// txtClick()

const txet = document.querySelector(".txt h1");
console.log(txet);


function txtClick() {
    txet.style.margin = "10px";
    txet.style.color = "#aaa";
    txet.style.width = "255px";
    txet.style.height = "50px";
    txet.style.borderRadius = "16px";
    txet.style.backgroundColor = "#000";
    console.log("txet was clicked!");
}

function txtMouse() {
    console.log("mouse is here!");
    txet.innerText = "Mouse is here";
    txet.style.margin = "10px";
}

function txtMouseLeave() {
    txet.innerText = "Mouse is gone";
    txet.style.padding = "10px";
}

function mainResize() {
    document.body.style.backgroundColor = "#ccc";
}

function mainCopy() {
    alert("복사가 성공적으로 완료되었습니다.");
}

function mainOffline() {
    alert("인터넷 연결이 헤제되었습니다.");
}

function mainOnline() {
    alert("인터넷 연결이 되었습니다.");
}

txet.onclick = txtClick;
txet.addEventListener("mouseenter", txtMouse);
txet.addEventListener("mouseleave", txtMouseLeave);
window.addEventListener("resize", mainResize);
window.addEventListener("copy", mainCopy);
window.addEventListener("offline", mainOffline);
window.addEventListener("online", mainOnline);