function calculateStats() {
    let parts = {
        "SLUG": {maxSpeed: 1, acceleration: -1},
        "HUNTR": {acceleration: 1, durability: -1},
        "GRNT": {durability: 1, willpower: -1},
        "WZRD": {willpower: 1, maxSpeed: -1},
        "LZRD": {maxSpeed: 1, willpower: -1},
        "FINK": {acceleration: 1, maxSpeed: -1},
        "KNG": {durability: 1, acceleration: -1},
        "MNSTR": {willpower: 1, durability: -1}
    };

    let acceleration = 10;
    let maxSpeed = 10;
    let durability = 10;
    let willpower = 10;

    // Get selected parts from dropdowns
    let selectedParts = [
        document.getElementById('top-body').value,
        document.getElementById('head').value,
        document.getElementById('bottom-body').value,
        document.getElementById('shoulders').value,
        document.getElementById('arms').value,
        document.getElementById('legs').value
    ];

    selectedParts.forEach(part => {
        if (parts[part]) {
            acceleration += parts[part].acceleration || 0;
            maxSpeed += parts[part].maxSpeed || 0;
            durability += parts[part].durability || 0;
            willpower += parts[part].willpower || 0;
        }
    });

    document.getElementById('result').innerHTML = `
        Acceleration: ${acceleration} <br>
        Max Speed: ${maxSpeed} <br>
        Durability: ${durability} <br>
        Willpower: ${willpower}
    `;
}
