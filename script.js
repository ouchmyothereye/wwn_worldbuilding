let allChoices = [];

function generate(tableName) {
  fetch(tableName + '.json')
    .then(response => response.json())
    .then(data => {
      let choice = data[Math.floor(Math.random() * data.length)];
      document.getElementById(tableName).innerText = choice;
      allChoices.push(choice);
      updateAllChoices();
    });
}

function updateAllChoices() {
  let allChoicesElement = document.getElementById('allChoices');
  allChoicesElement.innerHTML = '';
  for (let i = 0; i < allChoices.length; i++) {
    let li = document.createElement('li');
    li.innerText = allChoices[i];
    allChoicesElement.appendChild(li);
  }
}
