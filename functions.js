const infoButtons = document.querySelectorAll(".info-button");
const statementTexts = document.querySelectorAll(".statement-text");

// Function to hide all statement texts
function hideAllStatementTexts() {
  statementTexts.forEach(text => text.style.display = "none");
}

// Toggle statement text on button click
infoButtons.forEach(button => {
  button.addEventListener("click", function() {
    const statementText = this.parentNode.querySelector(".statement-text");
    // Hide all other statement texts before toggling the clicked one
    hideAllStatementTexts();
    statementText.style.display = statementText.style.display === "none" ? "block" : "none";
  });
});

// Hide statement texts on document click (excluding info buttons)
document.addEventListener("click", function(event) {
  if (!event.target.classList.contains("info-button")) {
    hideAllStatementTexts();
  }
});
