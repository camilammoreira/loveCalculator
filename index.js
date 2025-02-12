let result = Math.floor(Math.random() * 101);
const subtitle = document.querySelector("#subtitle");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");
const calcButton = document.querySelector("#calculate");
const resultText = document.querySelector("#result");
const forms = document.querySelectorAll(".form");
const refresh = document.querySelector("#refresh")
function isInvalid(input) {
    return input.trim() === "" || /^\d+$/.test(input);
}

calcButton.addEventListener("click", (event) => {
    if (name3.style.display === "none") {
        if (isInvalid(name1.value) || isInvalid(name2.value)) {
            alert("Please insert both names.");
        } else {
            calculate();
        };
    } else {
        if (isInvalid(name1.value) || isInvalid(name2.value) || isInvalid(name3.value)) {
            alert("Please insert both names.");
        } else {
            calculate();
        };
    };
});

function calculate() {
    event.preventDefault();
    resultText.innerHTML = result + "%";
    resultText.style.display = "block";
    forms.forEach(element => {
        element.style.display = "none";
    });
    subtitle.innerHTML = name1.value + " and " + name2.value + ", your compatibility is...";
    refresh.style.display = "block";
};

let count = 2;
const addNameButton = document.querySelector("#addName");
const orSpan = document.querySelector("#orSpan");


addNameButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (orSpan.style.display === "none") {
        orSpan.style.display = "inline-block";
        name3.style.display = "inline";
        addNameButton.innerHTML = "Remove Name";
    } else {
        orSpan.style.display = "none";
        name3.style.display = "none";
        name3.value = "";
        addNameButton.innerHTML = "Add Name";
    }
});

// function addName() {
//     const loverName = document.querySelector("#loverName");

//     const newName = document.createElement("input");
//     newName.setAttribute("class", "input-name");
//     newName.setAttribute("id", "name" + count++);
//     newName.setAttribute("placeholder", "Your other lover's name");

//     document.querySelector("#orSpan").style.display = "inline-block";

//     loverName.appendChild(newName);
// };


refresh.addEventListener("click", () => {
    location.reload();
});
