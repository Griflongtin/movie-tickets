// Business logic
function ticket (name, time, age, rating) {
  this.names = name;
  this.times = times;
  this.age = age;
  this.rating = rating;
}

// User interface logic
$(document).ready(function()  {
  $("form").submit(function(event) {
    event.preventDefault();

    var movieName = $("select#movie-name").val();
    var movieTimes = $("input [name=time]:checked").val();
    var userAge = $("input#movie-age").val();

 if (age >= 18){
   var allowed = true;
 } else {
   var allowed = false;
 }

 if (age <= 65) {
   var discount = false;
 } else {
   var discount = true;
 }


  });
});
