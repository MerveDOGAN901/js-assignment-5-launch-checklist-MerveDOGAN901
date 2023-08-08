
window.addEventListener("load", function() {
    let URL = "https://handlers.education.launchcode.org/static/planets.json";

    fetch(URL).then(function(response) {
        response.json().then(function(json) {
            const missionTarget = document.getElementById("missionTarget");

            // Select a random planet from the JSON data
            const randomPlanet = pickPlanet(json);

            missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${randomPlanet.name}</li>
                    <li>Diameter: ${randomPlanet.diameter}</li>
                    <li>Star: ${randomPlanet.star}</li>
                    <li>Distance from Earth: ${randomPlanet.distance}</li>
                    <li>Number of Moons: ${randomPlanet.moons}</li>
                </ol>
                <img src="${randomPlanet.image}" alt="Planet Image">
            `;
        });
    });

    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();


        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
        } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Make sure to enter valid information for each field!");
        } else {
            let newFaultyItems = document.getElementById("faultyItems");
            let newLaunchStatus = document.getElementById("launchStatus");
            let newPilotStatus = document.getElementById("pilotStatus");
            let newCopilotStatus = document.getElementById("copilotStatus");
            let newFuelStatus = document.getElementById("fuelStatus");
            let newCargoStatus = document.getElementById("cargoStatus");

            newPilotStatus.innerHTML = `Pilot name: ${pilotName.value}`;
            newCopilotStatus.innerHTML = `Co-pilot: ${copilotName.value}`;

            if (fuelLevel.value < 10000) {
                newFuelStatus.innerHTML = "Fuel level is not enough for the journey";
                newLaunchStatus.innerHTML = "Shuttle not ready for launch";
                newLaunchStatus.style.color = "red";
            } else if (cargoMass.value > 10000) {
                newCargoStatus.innerHTML = "Cargo mass is too much for the shuttle to take off";
                newLaunchStatus.innerHTML = "Shuttle not ready for launch";
                newLaunchStatus.style.color = "red";
            } else {
                newFuelStatus.innerHTML = "Fuel level is enough for the journey";
                newCargoStatus.innerHTML = "Cargo mass is low enough for the shuttle to take off";
                newLaunchStatus.innerHTML = "Shuttle is ready for launch";
                newLaunchStatus.style.color = "green";
            }

            newFaultyItems.style.visibility = "visible";
        }
    });
});
