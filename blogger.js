$(document).ready(function(){
//first post
$('#test1').click(function(){
$('#test11').hide().css('background-color','green').slideToggle('slow');
});
//animate post
$("#test22").click(function(){
  $("#test222").animate({"left": "+=50px"}, "slow");
});

$("#test2").click(function(){
  $("#test222").animate({"left": "-=50px"}, "slow");
});
//table editing
$('#test3').css('border','1px solid black');
$('#test3 td').css('border','1px solid black');
$('#test3 tr').filter(':even').css('background-color','green');

$('#test33').click(function(){
$('#test3 tr').filter(':even').animate({opacity:'toggle'},'slow');
});

$('#test333').click(function(){
$('#test3 td:contains(More)').css('background-color','red');
});

});
