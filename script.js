function parseCSV(data) {
  // Split data into rows
  let rows = data.split('\n');

  // Map each row to an array of columns and remove empty lines
  rows = rows.map(row => row.split(',')).filter(row => row.length > 1 || row[0] !== '');

  // Convert the rows to a single array of choices
  let choices = [].concat(...rows);

  return choices;
}

function generate(tableName) {
  fetch('tables/' + tableName + '.csv')
    .then(response => response.text())
    .then(data => {
      let choices = parseCSV(data);
      let choice = choices[Math.floor(Math.random() * choices.length)];
      document.getElementById(tableName).innerText = choice;
      allChoices.push(choice);
      updateAllChoices();
    });
}
