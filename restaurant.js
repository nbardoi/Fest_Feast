$("h3").hide();

var lat = "";
var lon = "";

database.ref().on("child_added", function(snapshot) {

    var sv = snapshot.val();

    lat = sv.latResults
    lon = sv.lngResults

    console.log(lat);
    console.log(lon);
});

$("#search").on("click", function() {
    $("h3").hide();
    
    event.preventDefault();

    $("#restaurants-div").empty();

        var search = $("#search-input").val().trim();
        console.log(search);
        
        $("#search-input").val("");
    
        var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + search + "&lat=" + lat + "&lon=" + lon + "&count=12";

        $.ajax({
            url: queryURL,
            type: 'GET',
            dataType: 'json',
            headers: {
                'user-key': '2f66bcd211105dc9a0b93cfcbde2e41c',
            },
            contentType: 'application/json; charset=utf-8',
        })   .then(function(response) {
                console.log(response);

                var results = response.restaurants;
                
                for (var i = 0; i < results.length; i++) {
                $("h3").text("SEARCH RESULTS FOR '"+ search + "'").show();

                var columnDiv = $("<div>").addClass("column")
                var calloutDiv = $("<div>").addClass("callout").attr("id", "info");
                var rest_name = $("<p>").text(results[i].restaurant.name).addClass("rest_name");
                var cuisines = $("<p>").text("Cuisine(s): " + results[i].restaurant.cuisines).addClass("cuisines");
                var costForTwo = $("<p>").text("Cost for Two: $" + results[i].restaurant.average_cost_for_two).addClass("costForTwo");
                var timings = $("<p>").text("Timings: " + results[i].restaurant.timings).addClass("timings");
                var phone_Number = $("<p>").text("Phone Number(s): " + results[i].restaurant.phone_numbers).addClass("phone_Number");
                var rating_color = results[i].restaurant.user_rating.rating_obj.bg_color.type;
                var rating = $("<p>").text(results[i].restaurant.user_rating.aggregate_rating + "/5").addClass("rating").css("background-color", rating_color);;
                var ratingText = $("<p>").text(results[i].restaurant.user_rating.rating_text).addClass("rating_Text")
                var rating_color = results[i].restaurant.user_rating.rating_obj.bg_color.type;
                var address = $("<p>").text("Address: " + results[i].restaurant.location.address).addClass("address");
                var rest_Image = $("<img>");

                var photo_URL = "";
                if (results[i].restaurant.photo_count == "0") {
                    photo_URL = "https://b.zmtcdn.com/images/placeholder_200_v2.jpg?fit=around%7C375%3A277&crop=375%3A277%3B%2A%2C%2A";
                    rest_Image.attr("alt", "NO PHOTOS FOUND");
                }else {
                    photo_URL = results[i].restaurant.photos[0].photo.url
                };
                rest_Image.attr("src", photo_URL).addClass("image");

                columnDiv.append(calloutDiv);
                calloutDiv.append(rest_name);
                calloutDiv.append(rating);
                calloutDiv.append(ratingText);
                calloutDiv.append(rest_Image);
                calloutDiv.append(cuisines);
                calloutDiv.append(costForTwo);
                calloutDiv.append(address);
                calloutDiv.append(timings);
                calloutDiv.append(phone_Number);

                $("#restaurants-div").append(columnDiv);
                }
        });

});

$("#zip").on("click", function() {
    event.preventDefault();

    window.location = "index.html";
});   