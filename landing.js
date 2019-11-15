var firebaseConfig = {
    apiKey: "AIzaSyARc2BoDAwXfBOGquZA2fajsAOeOLp8CTg",
    authDomain: "new-member - a5313.firebaseapp.com",
    databaseURL: "https://new-member-a5313.firebaseio.com",
      projectId: "new-member - a5313",
    storageBucket: "new-member - a5313.appspot.com",
    messagingSenderId: "400495999207",
    appId: "1: 400495999207: web: 9ea3589de3114bb4694a42",
    measurementId: "G- XBZFDJJ4K0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var zip;
  var latResults = 0;
  var lngResults = 0;
  $("button").on("click", function () {
    event.preventDefault();
    
    //get number value from input
    zip = $("#zip - input").val();
    console.log(zip);
    $("#zip - input").val("");
  
    var queryURL = "https://www.mapquestapi.com/geocoding/v1/address?key=OBoNOwnKwrAtuAq41mWwlOIvwGOj1mSV&inFormat=kvp&outFormat=json&location=" + zip + "&thumbMaps=false";
      // Performing an AJAX request with the queryURL
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function (response) {
        //console.log(response);
        latResults = response.results["0"].locations["0"].latLng.lat;
        lngResults = response.results["0"].locations["0"].latLng.lng;
        console.log(lngResults);
        console.log(latResults);
        database.ref().push({
        zip: zip,
        latResults: latResults,
        lngResults: lngResults
        });
        window.location = "restaurant.html";
    });
  });
  