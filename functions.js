const statements = [
  "regulate my physical reality?",
  "know my deepest thoughts and feelings?",
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

  // Append statement text and button to statement cell
  statementCell.appendChild(statementTextElement);
  statementCell.appendChild(infoButton);

  statementRow.appendChild(statementCell);

  // Generate radio buttons and labels (fixed scale 0-5)
  const buttonsRow = document.createElement("tr");
  buttonsRow.classList.add("buttons");
  for (let i = 0; i < 6; i++) { // Loop for 6 options (0-5)
    const radioCell = document.createElement("td");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = `section${index + 1}`;  // Fix name attribute (unique for each statement)
    radioInput.value = i;

    const radioLabel = document.createElement("label");
    radioLabel.for = `${radioInput.id}`;  // Label "for" attribute references radio ID
    radioLabel.innerText = i;

    // Assign unique ID to each radio button
    radioInput.id = `section${index + 1}_row${i + 1}`;

    radioCell.appendChild(radioInput);
    radioCell.appendChild(radioLabel);
    buttonsRow.appendChild(radioCell);
  }

  const closingRow = document.createElement("tr");
  closingRow.classList.add("closing");

  // **Append buttons row only**
  statementRow.appendChild(buttonsRow);

  // **Move closing row append outside the function**
  // statementsContainer.appendChild(closingRow);  // Removed from here

  // Return the row element (optional)
  return statementRow;
}

// Generate statement rows and append them to the container
statements.forEach((statement, index) => {
  const statementRow = generateStatementRow(statement, index);
  statementsContainer.appendChild(statementRow);
  // statementsContainer.appendChild(closingRow);  // Removed from here (already appended in generateStatementRow)
});
