$(document).ready(function(){
    var sports = ['Baseball', 'Basketball', 'Football', 'Hockey', 'Skateboarding', 'Soccer', 'Golf', 'Skiing'];

//create array buttons
    function buttonSport(){
        $('#buttonsView').empty();
        
        for ( var i=0; i < sports.length; i++) {
//create all buttons
            var a = $('<button>');
            a.addClass('sport');
            a.attr('data-name', sports[i]);
            a.text(sports[i]);
            $('#buttonsView').append(a);
        }
    }    
    buttonSport();
   
//on button click
  $(document).on('click', '.sport', function() {

    var sport = $(this).html(); 
    
//gif API
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
//grabs the data
            var results = response.data;

//empties the div before adding more gifs
            $('#sportView').empty();
//loops through the data
                for ( var j=0; j < results.length; j++) {
                    var imageDiv = $('<div>');
                    var imageView = results[j].images.fixed_height.url;
                    var still = results[j].images.fixed_height_still.url;
  
                    var sportImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
                    sportImage.attr('data-state', 'still');
                    $('#sportView').prepend(sportImage);
                    sportImage.on('click', playGif);
                  
                    var rating = results[j].rating;
                    var displayRated= $('<p>').text("Rating: " + rating);
                    $('#sportView').prepend(displayRated);
                     }
        });

        function playGif() { 
                    var state = $(this).attr('data-state');
                    // console.log(state);
                 if ( state == 'still'){
                     $(this).attr('src', $(this).data('animate'));
                      $(this).attr('data-state', 'animate');
                 } else{
                     $(this).attr('src', $(this).data('still'));
                     $(this).attr('data-state', 'still');
                    }
                }
        }) 
       
///<<<>>>Broken<<<>>>

$(document).on('click', '#addSport', function(){
    if ($('#add-a-sport').val().trim() == ''){
         }

   else {
    var Sport = $('#add-a-sport').val().trim();
    topics.push(Sport);
    $('#add-a-sport').val('');
    buttonSport();
    return false;
    }
});

});