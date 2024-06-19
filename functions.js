const statementsRaw = document.querySelectorAll(".statement");
const hiddenTexts = document.querySelectorAll(".hidden-text");

// Function to hide all hidden texts
function hideAllHiddenTexts() {
  hiddenTexts.forEach(text => text.style.display = "none");
}

// Toggle hidden text on button click
statementsRaw.forEach(button => {
  button.addEventListener("click", function() {
    const hiddenText = this.parentNode.querySelector(".hidden-text");
    // Hide all other hidden texts before toggling the clicked one
    hideAllHiddenTexts();
    hiddenText.style.display = hiddenText.style.display === "none" ? "block" : "none";
  });
});

// Hide hidden texts on document click (excluding info buttons)
document.addEventListener("click", function(event) {
  if (!event.target.classList.contains("info-button")) {
    hideAllHiddenTexts();
  }
});
