
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	 /*---function for guesses, called "temp"---*/
       function temp () {
      for (i=1;  i=newItem; i++)

      if (newItem ==1 || newItem <19) {
      console.log("you are warm");
      }
      else if(newItem >=20 && newItem <59)
      console.log("you are lukewarm");
      
      else if (newItem >=60 && newItem <81)
      console.log("you are cold");
       
      else  (newItem >=80  && newItem <101 )
      console.log("you are very cold");
       
    }
    /*---variable for the for loop and guesses---*/
    var newItem = $('#guessbutton').val();
    temp()

  });


