function fetchJSONData(file) {
    return fetch(file)
        .then(response => response.json());
}

function generateResponse() {
    fetchJSONData('significant_terrain1.json')
        .then((data) => {
            var randomIndex = Math.floor(Math.random() * data.length);
            var feature = data[randomIndex];
            document.getElementById("result").innerHTML = feature;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
