const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      calculate();
    } else {
      display.value += value;
    }
  });
});

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    // allow typing directly
  } else if (key === "Enter") {
    calculate();
    event.preventDefault();
  } else if (key === "Backspace") {
    // normal backspace works
  } else if (key.toLowerCase() === "c") {
    display.value = "";
  }
});

// Calculation function with error handling
function calculate() {
  try {
    if (/[^0-9+\-*/.]/.test(display.value)) {
      throw new Error("Invalid Input");
    }
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
