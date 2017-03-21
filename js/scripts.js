// Business logic
function ticket (name, time, age) {
  this.names = name;
  this.times = times;
  this.age = age;
}

// User interface logic
$(document).ready(function()  {
  $("form").submit(function(event) {
    event.preventDefault();

    var movieName = $("select#movie-name").val();
    var movieTimes = $("input:radio[name=time]:checked").val();
    var userAge = $("input#movie-age").val();
    var ticketCost = 8;
    console.log("hi");
 if (userAge >= 18){
   var allowed = true;
 } else {
   var allowed = false;
 }
console.log("3");
 if (userAge >= 65) {
   return ticketCost -2;
   console.log(ticketCost);
 }
 console.log("4");
if (movieTimes = 1) {
  return ticketCost -2;
}

console.log("5");

$("#movie").text(movieName)
$("#time-to-be").text(movieTimes)
$("#cost").text(ticketCost)
$("output-receipt").show();
console.log("6");
  });
});
