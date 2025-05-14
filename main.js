let button = document.getElementById("button");
let statement = document.getElementById("wich-mode");
let isLight = true;
let isDark = false;


let changeMode = function() {
    if (isLight === true) {  // If light mode is on.
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isLight = false;
        isDark = true;
        statement.textContent = "Dark";

    } else {  // If dark mode is on.
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isLight = true;
        isDark = false;
        statement.textContent = "Light";
    }
};

button.addEventListener("click", changeMode);
