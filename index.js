const result1 = Math.floor(Math.random() * 101);
const result2 = Math.floor(Math.random() * 101);
const subtitle = document.querySelector("#subtitle");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");
const calcButton = document.querySelector("#calculate");
const resultText1 = document.querySelector("#result1");
const resultText2 = document.querySelector("#result2");
const resultTextName1 = document.querySelector("#result-name-lover1");
const resultTextName2 = document.querySelector("#result-name-lover2");
const resultContainer = document.querySelector(".result-container");
const form = document.querySelector(".form");
const refreshButton = document.querySelector("#refresh");

function isInvalid(input) {
    return input.trim() === "" || /^\d+$/.test(input);
};

calcButton.addEventListener("click", (event) => {
    if (name3.style.display === "none") {
        if (isInvalid(name1.value) || isInvalid(name2.value)) {
            alert("Please insert valid names.");
        } else {
            calculate(false);
        };
    } else {
        if (isInvalid(name1.value) || isInvalid(name2.value) || isInvalid(name3.value)) {
            alert("Please insert valid names.");
        } else {
            calculate(true);
        };
    };
});

function calculate(thirdName) {
    event.preventDefault();
    form.style.display = "none";
    subtitle.innerHTML = name1.value + ", your compatibility is...";

    resultText1.innerHTML = result1 + "%";
    resultText1.style.display = "block";

    resultTextName1.innerHTML = "with " + name2.value;
    resultTextName1.style.display = "block";

    refreshButton.style.display = "block";

    if (thirdName) {
        resultText2.innerHTML = result2 + "%";
        resultText2.style.display = "block";

        resultTextName2.innerHTML = "with " + name3.value;
        resultTextName2.style.display = "block";

        resultContainer.style.display = "flex";
    }
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


refreshButton.addEventListener("click", () => {
    location.reload();
});
