// var zip = "";
var zip = "";


// database.ref().on("child_added", function(snapshot) {
    
//     var sv = snapshot.val();
//     zip = sv.zip;
//     console.log(zip);

// });
var events = [""];
var genre = [""];
var start = [""];
var images = [""];



// append multiple values to the array
events.push();

// display all values
for (var i = 0; i < events.length; i++) {
    
  console.log(events[i]);
}


$("#search").on("click", function() {
    event.preventDefault();

        var search = $("#search-input").val().trim();
        console.log(search);
        
        $("#search-input").val("");
    
        // var apiKeyTM = ML6a8XQhSfo7pMxWI2w4XrqUeERBnspS
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=ML6a8XQhSfo7pMxWI2w4XrqUeERBnspS&postalCode=" + zip;


        $.ajax ({
            type:"GET",
            url: queryURL,
            async:true,
            dataType: "json",
            success: function(json) {
                        console.log(json);
                    }
                });

                     
            // error: function (xhr, status, err) {

            // }
                        // This time, we do not end up here!
                 });
