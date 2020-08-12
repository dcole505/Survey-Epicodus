$(document).ready(function() {
$("form#name").submit(function(event){
  event.preventDefault();
  const firstName= $("input#firstName").val();
  const lastName= $("input#lastName").val();


  $(".firstName").text(firstName);
  $(".lastName").text(lastName);

  $("#favoriteThings").show();
  });
});
