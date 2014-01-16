// create array with images inside.
  var foods = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg"]
  var i = 0

// create an array for scores
  var scores = []

   // Food rating using dropdown.
  // writing the rating to an array.
  // advance image to next image.
  $(document).ready(function(){
    $("#rating").on("change",function(e){
      if(i<foods.length){
        scores[i]=$("#rating").val();
        next(e);
      }
    });

  // back and skip on-click listeners - must be inside document.ready function.
    $("#skip").on('click', next);
    $("#back").on('click', previous);


  // adding numbers stored in all indexes at the end. averaging them.
  // displaying in text average score.

  // next image function
    function next(event){
      event.preventDefault();
     if (i+1<foods.length){
      showImage(++i);
     }
  };

  // previous image function
    function previous(event){
      event.preventDefault();
      if ((i-1)>=0){
        showImage(--i);
      }
    };

  // function that changes images, either next or previous.
  // Used by previous.next image buttons on-click listener functions.
    function showImage(){
      $("#carousel").attr('src', foods[i]);
    };

  });