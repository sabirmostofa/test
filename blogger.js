$(document).ready(function(){
//first post
$('#test1').click(function(){
$('#test11').hide().css('background-color','green').slideToggle('slow');
});
//animate post
$("#test2").click(function(){
  $("#test222").animate({"left": "+=50px"}, "slow");
});

$("#test22").click(function(){
  $("#test222").animate({"left": "-=50px"}, "slow");
});

});
