const result1 = Math.floor(Math.random() * 101);
const result2 = Math.floor(Math.random() * 101);
const subtitle = document.querySelector("#subtitle");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");
namesInputs = [name1, name2, name3];
const invalidMsg = document.querySelector("#invalid-msg");
const resultText1 = document.querySelector("#result1");
const resultText2 = document.querySelector("#result2");
const resultTextName1 = document.querySelector("#result-name-lover1");
const resultTextName2 = document.querySelector("#result-name-lover2");
const resultContainerText2 = document.querySelector("#resultContainerText2");
const form = document.querySelector(".form");
const refreshButton = document.querySelector("#refresh");

function isInvalid(input) {
    return input.trim() === "" || /\d+/.test(input);
};

function capitalize(string) {
    const prefixes = ["de", "da", "das", "do", "dos", "van", "von", "del", "di", "du", "la", "le"];
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (!prefixes.includes(words[i]) || i === 0) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        };
    }

    return words.join(" ");
}

function calculate(thirdName) {
    event.preventDefault();
    form.style.display = "none";
    subtitle.innerHTML = capitalize(name1.value) + ", your compatibility is...";

    resultText1.innerHTML = result1 + "%";
    resultText1.style.display = "block";

    resultTextName1.innerHTML = "with " + capitalize(name2.value);
    resultTextName1.style.display = "inline";//

    refreshButton.style.display = "block";

    if (thirdName) {
        resultText2.innerHTML = result2 + "%";
        resultText2.style.display = "block";
        resultContainerText2.style.display = "block";

        resultTextName2.innerHTML = "with " + capitalize(name3.value);
        resultTextName2.style.display = "block";
    }

    if (thirdName && result1 < result2) {
        resultText2.classList.add("best-match");
    } else {
        resultText1.classList.add("best-match");
    }
};

form.addEventListener("submit", () => {
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

namesInputs.forEach(element => {
    element.addEventListener("keyup", () => {
        if (isInvalid(element.value)) {
            element.classList.add("invalid");
            invalidMsg.style.display = "block";
        } else {
            element.classList.remove("invalid");
            invalidMsg.style.display = "none";
        }
    });
});

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

refreshButton.addEventListener("click", () => {
    location.reload();
});
