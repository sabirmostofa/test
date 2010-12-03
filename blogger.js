$(document).ready(function(){
var testCounter=1;
$('#test1').click(function()
testCounter++;
if(testCounter%2==1){
$('#test11').css('background-color','green');
}
$('#test11').css('background-color','');

});
});
