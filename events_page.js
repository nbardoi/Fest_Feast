var lat = latResults;
var lon = lngResults;

$("#search").on("click", function() {
    event.preventDefault();

        var search = $("#search-input").val().trim();
        console.log(search);
        
        $("#search-input").val("");
    
        var queryURL = "" + search + "&lat=" + lat + "&lon=" + lon;

        $.ajax({
            url: queryURL,
            type: 'GET',
            dataType: 'json',
            headers: {
                'user-key': '',
            },
            contentType: 'application/json; charset=utf-8',
        })   .then(function(response) {
                console.log(response);
        });

});