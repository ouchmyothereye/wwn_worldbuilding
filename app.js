window.onload = function() {
    const buttonContainer = document.getElementById('button-container');
    const selectedOption = document.getElementById('selected-option');

    let filenames = [
        'cult_enforcement',
        'cult_goal',
        'cult_malevolence',
        'cult_problems',
        'cult_quirks',
        'cult_rewards',
        'cult_unity',
        'govt_agents',
        'govt_authority',
        'govt_establishment',
        'govt_forms_multi',
        'govt_forms_single',
        'govt_legitimacy',
        'govt_mpprobs',
        'govt_probmps',
        'govt_recentevent',
        'govt_rulingclass',
        'govt_stability',
        'govt_str',
        'govt_struggles',
        'history_conclusion',
        'history_crisis',
        'history_events',
        'history_origin',
        'history_originals',
        'history_peak',
        'history_surviviors',
        'history_zenith',
        'nation_currentprobs',
        'nation_disputes',
        'nation_goodthings',
        'nation_positiveties',
        'nation_themes',
        'religion_clergy',
        'religion_desires',
        'religion_function',
        'religion_origin',
        'religion_portfolio',
        'religion_relatability',
        'religion_scriptures',
        'religion_structure',
        'religion_temple_assistance',
        'religion_temple_leader',
        'religion_temple_opinion',
        'religion_temple_problems',
        'religion_temple_quirks',
        'religion_temple_size',
        'ruins_locations',
        'society_appearance_adornment',
        'society_appearance_build',
        'society_appearance_eye',
        'society_appearance_hair',
        'society_appearance_quirks',
        'society_appearance_skincolor',
        'society_organization',
        'society_template',
        'society_values',
        'terrain_ants',
        'terrain_danger',
        'terrain_history',
        'terrain_major',
        'terrain_population',
        'terrain_quirk',
        'terrain_use'
    ];

    let groups = [...new Set(filenames.map(filename => filename.split('_')[0]))]; // Get unique group names

    groups.forEach(group => {
        let button = document.createElement('button');
        button.textContent = group;
        button.addEventListener('click', () => fetchRandomOptionForGroup(group));
        buttonContainer.appendChild(button);
    });

    function fetchRandomOptionForGroup(group) {
        selectedOption.innerHTML = ''; // Clear the previous options
        let filesForGroup = filenames.filter(filename => filename.startsWith(group)); // Get all files for this group
        filesForGroup.forEach(filename => fetchRandomOption(filename)); // Fetch a random option from each file
    }

    function fetchRandomOption(filename) {
        fetch(`./${filename}.json`)
            .then(response => response.json())
            .then(data => {
                let options = data;
                let randomIndex = Math.floor(Math.random() * options.length);
                let result = document.createElement('p');
                result.textContent = `${filename.replace(/_/g, ' ')}: ${options[randomIndex]['0']}`;
                selectedOption.appendChild(result); // Append a new paragraph for each result
            })
            .catch(error => console.error('Error:', error));
    }
}
