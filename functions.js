const statements = [
  "statement number one?",
  "statement number two?",
  // Add more statements here
];

const statementsContainer = document.getElementById("statements-container");

function generateStatementRow(statementText, index) {
  const statementRow = document.createElement("tr");
  statementRow.classList.add("statement-row");

  const statementCell = document.createElement("td");
  statementCell.colSpan = 6;
  statementCell.classList.add("statement");

  const statementTextElement = document.createElement("span");
  statementTextElement.classList.add("statement-text");
  statementTextElement.innerText = statementText;

  const infoButton = document.createElement("button");
  infoButton.type = "button";
  infoButton.classList.add("info-button");
  infoButton.innerText = "?";

  statementCell.appendChild(statementTextElement);
  statementCell.appendChild(infoButton);
  statementRow.appendChild(statementCell);

  // Generate radio buttons and labels (assuming 5 options)
  const buttonsRow = document.createElement("tr");
  buttonsRow.classList.add("buttons");
  for (let i = 0; i < 5; i++) {
    const radioCell = document.createElement("td");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = `section${index + 1}_row${i + 1}`;
    radioInput.value = i;

    const radioLabel = document.createElement("label");
    radioLabel.for = `section${index + 1}_row${i + 1}`;
    radioLabel.innerText = i;

    radioCell.appendChild(radioInput);
    radioCell.appendChild(radioLabel);
    buttonsRow.appendChild(radioCell);
  }

  const closingRow = document.createElement("tr");
  closingRow.classList.add("closing");

  statementRow.appendChild(buttonsRow);
  statementRow.appendChild(closingRow);

  return statementRow;
}

// Generate statement rows and append them to the container
statements.forEach((statement, index) => {
  const statementRow = generateStatementRow(statement, index);
  statementsContainer.appendChild(statementRow);
});

// Rest of your JavaScript logic for handling button clicks and hidden text (can be moved here)


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
