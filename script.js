document.getElementById("get-stats-button").addEventListener("click", async function() {
    const head = document.getElementById("head").value;
    const shoulders = document.getElementById("shoulders").value;
    const arms = document.getElementById("arms").value;
    const upperBody = document.getElementById("upper-body").value;
    const lowerBody = document.getElementById("lower-body").value;
    const feet = document.getElementById("feet").value;

    // Check if all parts are selected
    if (head === "default" || shoulders === "default" || arms === "default" || upperBody === "default" || lowerBody === "default" || feet === "default") {
        alert("Please select all the MixBot parts");
        return;
    }

    // Combine the selected parts into a single string (mint address)
    const parts = `${head},${shoulders},${arms},${upperBody},${lowerBody},${feet}`;

    // The URL to fetch the MixBot data from the backend
    const url = `https://mixbot-fetch-server-nm60ep7kg-mixmobracer1s-projects.vercel.app/fetchMixBotData?parts=${parts}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.acceleration !== undefined) {
            // Display the results on the page
            document.getElementById("acceleration").textContent = `Acceleration: ${data.acceleration}`;
            document.getElementById("maxspeed").textContent = `Max Speed: ${data.maxSpeed}`;
            document.getElementById("durability").textContent = `Durability: ${data.durability}`;
            document.getElementById("willpower").textContent = `Willpower: ${data.willpower}`;
        } else {
            alert("Failed to fetch MixBot data. Please check the selected parts and try again.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch MixBot data. Please try again later.");
    }
});
