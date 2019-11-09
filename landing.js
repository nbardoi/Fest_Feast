var zip;
var latResults;
var lanResults;
$("button").on("click", function() {
    event.preventDefault();

    //get number value from input
    var zip= $("#zip-input").val();
    console.log(zip);

    //
    var queryURL = "https://www.mapquestapi.com/geocoding/v1/address?key=OBoNOwnKwrAtuAq41mWwlOIvwGOj1mSV&inFormat=kvp&outFormat=json&location=" + zip +"&thumbMaps=false";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        //console.log(response);
        var latResults = response.results["0"].locations["0"].latLng.lat;
        var lngResults = response.results["0"].locations["0"].latLng.lng;
        console.log(lngResults);
        console.log(latResults);

    });
});