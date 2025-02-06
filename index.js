let result = Math.floor(Math.random() * 101);

const name1 = document.getElementById("name1").value;
const name2 = document.getElementById("name2").value;
const calcButton = document.getElementById("calculate");
const resultText = document.getElementById("result");

calcButton.addEventListener("click", ()=> {
    event.preventDefault();
    resultText.innerHTML = result + "%";
});
