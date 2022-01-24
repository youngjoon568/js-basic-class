const h1 = document.querySelector("div.txt h1");

function txtClick() {
    const txtColor = h1.style.color;
    let newColor;
    if(txtColor === "blue") {
        newColor = "red";
        h1.innerText = "red!";
    } else {
        newColor = "blue";
        h1.innerText = "blue!";
    }

    h1.style.color = newColor;
}

h1.addEventListener("click" ,txtClick);