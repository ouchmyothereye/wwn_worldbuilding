let allChoices = [];

function parseCSV(data) {
  let rows = data.split('\n');
  rows = rows.map(row => row.split(',')).filter(row => row.length > 1 || row[0] !== '');
  let choices = [].concat(...rows);
  return choices;
}

function generate(tableName) {
  allChoices = Array.isArray(allChoices) ? allChoices : [];
  fetch('tables/' + tableName + '.csv')
    .then(response => response.text())
    .then(data => {
      let choices = parseCSV(data);
      let choice = choices[Math.floor(Math.random() * choices.length)];
      document.getElementById(tableName).innerText = choice;
      allChoices.push(`${tableName}: ${choice}`);
      updateAllChoices();
    });
}

function updateAllChoices() {
  let list = document.getElementById('allChoices');
  list.innerHTML = '';
  for(let choice of allChoices) {
    let listItem = document.createElement('li');
    listItem.textContent = choice;
    list.appendChild(listItem);
  }
}

function generateAll() {
  // List all your tables here
  let tables = [
    'cult_enforcement',
    'cult_goal',
    'cult_malevolence',
    // Add more table names...
  ];

  for(let tableName of tables) {
    generate(tableName);
  }
}
