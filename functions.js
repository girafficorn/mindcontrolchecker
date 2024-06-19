const statements = document.querySelectorAll(".statement");
const hiddenTexts = document.querySelectorAll(".hidden-text");

// Function to hide all hidden texts
function hideAllHiddenTexts() {
  hiddenTexts.forEach(text => text.style.display = "none");
}

// Toggle hidden text on statement click
statements.forEach(statement => {
  statement.addEventListener("click", function() {
    const hiddenText = this.nextElementSibling; // Assuming the hidden text is the next sibling of the statement
    
    // Hide all other hidden texts before toggling the clicked one
    hideAllHiddenTexts();
    
    if (hiddenText && hiddenText.classList.contains("hidden-text")) {
      hiddenText.style.display = hiddenText.style.display === "none" ? "block" : "none";
    }
  });
});

// Hide hidden texts when clicking outside the statements
document.addEventListener("click", function(event) {
  const targetElement = event.target;
  
  // Check if the clicked element is a statement or a child of a statement
  const isStatementOrChild = statements.some(statement => statement.contains(targetElement));
  
  // Hide all hidden texts if the click is outside the statements
  if (!isStatementOrChild) {
    hideAllHiddenTexts();
  }
});