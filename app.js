var lat = 29.424349;
var lon = -98.491142;

$("#search").on("click", function() {
    event.preventDefault();

        var search = $("#search-input").val().trim();
        console.log(search);
        
        $("#search-input").val("");
    
        var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + search + "&lat=" + lat + "&lon=" + lon;

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
        });

});
