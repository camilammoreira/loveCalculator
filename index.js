let result = Math.floor(Math.random() * 101);
const subtitle = document.querySelector("#subtitle");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const calcButton = document.querySelector("#calculate");
const resultText = document.querySelector("#result");
const forms = document.querySelectorAll(".form");
const refresh = document.querySelector("#refresh")

function isInvalid(input) {
    return input.trim() === "" || /^\d+$/.test(input);
}

calcButton.addEventListener("click", (event) => {
    if (isInvalid(name1.value) || isInvalid(name2.value)) {
        alert("Please insert both names.");
    } else {
        event.preventDefault();
        resultText.innerHTML = result + "%";
        resultText.style.display = "block";
        forms.forEach(element => {
            element.style.display = "none";
        });
        subtitle.innerHTML = name1.value + " and " + name2.value + ", your compatibility is...";
        refresh.style.display = "block";
    }

});

refresh.addEventListener("click", () => {
    location.reload();
});
