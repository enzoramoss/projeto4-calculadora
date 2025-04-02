const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeButton = document.getElementById("themeButton");
let isLightTheme = false;

function updateDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let expression = display.value.replace(/mod/g, "%");

  try {
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Erro";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      updateDisplay(value);
    }
  });
});

themeButton.addEventListener("click", () => {
  isLightTheme = !isLightTheme;
  document.body.classList.toggle("light-theme", isLightTheme);
});

