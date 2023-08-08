window.addEventListener("load", function() {
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function(result) {
       const listedPlanets = result;
       console.log(listedPlanets);

       const randomPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(
           document,
           randomPlanet.name,
           randomPlanet.diameter,
           randomPlanet.star,
           randomPlanet.distance,
           randomPlanet.moons,
           randomPlanet.image
       );
   });
   
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
       event.preventDefault();
       
       // Rest of your form submission code...
   });
});
