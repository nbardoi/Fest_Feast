var lat = latResults;
var lon = lngResults;

$("#search").on("click", function() {
    event.preventDefault();

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
                var columnDiv = $("<div>").addClass("column");
                var calloutDiv = $("<div>").addClass("callout");
                var rest_name = $("<p>").text(results[i].restaurant.name).addClass("rest_name");
                var cuisines = $("<p>").text("Cuisines: " + results[i].restaurant.cuisines).addClass("rest_name");
                var rest_Image = $("<img>");

                var photo_URL = "";
                if (results[i].restaurant.photo_count == "0") {
                    photo_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMqnevv6WK35syKtSA6dLfOnZxTQ0COwnNw6PskHtkgBtkxaO&s";
                    rest_Image.attr("alt", "NO PHOTOS FOUND");
                } else {
                    photo_URL = results[i].restaurant.photos[0].photo.url
                };

                rest_Image.attr("src", photo_URL);
                columnDiv.append(calloutDiv);
                calloutDiv.append(rest_name);
                calloutDiv.append(rest_Image);
                calloutDiv.append(cuisines);
                $("#restaurants-div").append(columnDiv);
                }
        });

});