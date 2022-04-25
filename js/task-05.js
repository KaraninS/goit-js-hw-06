const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const isFull = event.currentTarget.value;
  output.textContent = isFull ? isFull : "Anonymous";
});