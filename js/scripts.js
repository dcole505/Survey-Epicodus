$(document).ready(function() {
$("form#name").submit(function(event){
  event.preventDefault();
  const firstName = $("input#firstName").val();
  const lastName = $("input#lastName").val();
  const favFood = $("#food").val();
  const favAnimal = $("input:radio[name=animal]:checked").val();


  $(".firstName").text(firstName);
  $(".lastName").text(lastName);
  $(".favoriteFood").text(favFood);
  $(".favoriteAnimal").text(favAnimal);

  $("#favoriteThings").show();
  });
});
