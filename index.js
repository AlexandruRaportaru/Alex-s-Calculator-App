//-------------------------- Selectors -------------------------//

const result = document.querySelector(".input-text");

//-------------------------- Functions -------------------------//

let calculate = (number) => {
    result.value += number;
    result.focus();
}

let calcResult = () => {
    try {
        result.value = eval(result.value);
    }
    catch (error) {
        result.value = "ERROR";
    }
}

function clr() {
    result.value = "";
}

let del = () => {
    result.value = result.value.slice(0, -1);
}
