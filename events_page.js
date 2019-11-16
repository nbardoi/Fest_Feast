$(".lead").hide();

var lat = "";
var lon = "";
var zip = "";
// var gen = "";
var times = "";
var phone_numbers = "";
var address = "";


database.ref().on("child_added", function(snapshot) {

    var sv = snapshot.val();
    zip = sv.zip;
    console.log("zip: " + zip);


    lat = sv.latResults
    lon = sv.lngResults
    
    
    console.log(lat);
    console.log(lon);
    console.log(database);
    console.log(sv);
    console.log( snapshot.val);
});


$("#search").on("click", function(e) {
    e.preventDefault();
    $("#events-div").empty();

        var search = $("#search-input").val().trim();
        console.log(search);
        
        
        $("#search-input").val("");
        var apikey = "ML6a8XQhSfo7pMxWI2w4XrqUeERBnspS";
        // var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="+apikey+"&q=" + search + "&genre" + gen + "&lat=" + lat + "&lon=" + lon + "&zip=" + zip + "&count=12";
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="+apikey+"&q=" + search &postalCode=" + zip + "&count=9";

        queryURL = 'https://cors-anywhere.herokuapp.com/'+queryURL;
        $.ajax({
            url: queryURL,
            method: 'GET',
            // dataType: 'json',
            // headers: {
            //      'user-key':"ML6a8XQhSfo7pMxWI2w4XrqUeERBnspS",
            //      contentType: 'application/json; charset=utf-8',
            //      "x-requested-with": "xhr"
            //     // error: function(xhr, status, err) {
            //     //  }
            // },

            
        })   .then(function(response) {
                

                var results = response._embedded.events;
                console.log(response);
                
                for (var i = 0; i < results.length; i++) {
                $(".lead").show();
                
                var columnDiv = $("<div>").addClass("column");
                var calloutDiv = $("<div>").addClass("callout");
                var show_name = $("<p>").text(results[i].name).addClass("show_name");
                var genres = $("<p>").text("Genres: " + results[i].genre).addClass("genres");
                var times = $("<p>").text("Times: " + results[i].times).addClass("times");
                var phone_Number = $("<p>").text("Phone Number: " + results[i].phone_numbers).addClass("phone_Number");
                var address = $("<p>").text("Address: " + results[i]._embedded.venues[0].name).addClass("address");
                var show_Image = $("<img>");
                var photo_URL = "";

                var wellSection = $('<div>');
                wellSection.addClass("well");
                wellSection.attr('id', 'eventInfo-' + i);
                $('#wellSection').append(wellSection);

                $("#wellSection-" + i).append("<p>").text("Genres: " + results[i].genre).addClass("genres");
                

                if (results[i].photo_count == "0") {
                    photo_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdPOJK1WQchVXd5LVNhuRvez1arFJCApbEc6O27wWFD5PpegG&s";
                    show_Image.attr("alt", "NO PHOTOS FOUND");
                }else {
                    photo_URL = results[i].images[0].url;
                };
                
                show_Image.attr("src", photo_URL);
                columnDiv.append(calloutDiv);
                calloutDiv.append(show_name);
                calloutDiv.append(show_Image);
                // calloutDiv.append(genres);
                // calloutDiv.append(costForTwo);
                calloutDiv.append(address);
                // calloutDiv.append(times);
                // calloutDiv.append(phone_Number);


                $("#events-div").append(columnDiv);
                }
        });

});

$("#zip").on("click", function() {
    event.preventDefault();

    window.location = "index.html";
});   



// var zip = "";


// // database.ref().on("child_added", function(snapshot) {
    
// //     var sv = snapshot.val();
// //     zip = sv.zip;
// //     console.log(zip);

// // });
// var events = [""];
// var genre = [""];
// var time = [""];
// var images = [""];






// $("#search").on("click", function() {
//     event.preventDefault();

//         var search = $("#search-input").val().trim();
//         console.log(search);
        
//         $("#search-input").val("");
    
//         // var apiKeyTM = ML6a8XQhSfo7pMxWI2w4XrqUeERBnspS
//         var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=ML6a8XQhSfo7pMxWI2w4XrqUeERBnspS&postalCode=" + zip+"&keyword=" + search;


//         $.ajax ({
//             type:"GET",
//             url: queryURL,
//             async:true,
//             dataType: "json",
//             success: function(json) {
//                         console.log(json);
//                     }
//                 });

                     
//             // error: function (xhr, status, err) {

//             // }
//                         // This time, we do not end up here!
//                  });
