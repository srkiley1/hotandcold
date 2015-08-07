
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	   
    var newItem = "";
    var count = $("#count").val();
    var winningNumber = 1;
     $("#guessButton").click(function(){
        newItem = $('#userGuess').val();
        count++;  
        newGame();
             
        temp();
        console.log(newItem);
    });

     /*---function for guesses, called "temp"---*/
      function temp () {
      //for (i=1;  i=newItem; i++)
      if (newItem == winningNumber){
        $("#feedback").append("you win!");
      }
      else if (newItem <19){
        $("#feedback").append("you are warm");
      }
      else if(newItem >=20 && newItem <59){
         $("#feedback").append("you are lukewarm");
      }
      else if (newItem >=60 && newItem <81){
         $("#feedback").append("you are cold");
      }
      else {
         $("#feedback").append("you are very cold");
      }
    }
    /*---variable for the for loop and guesses---*/
        function newGame (){
        $("#feedback").empty();
             
        $("#count").empty();
        $("#count").append(count);    
        
      }

  });


