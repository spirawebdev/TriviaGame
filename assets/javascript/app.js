//Create conditional .on(click) statements when buttons are pushed//
var Correct = 0;
var totalIncorrect = 3;
var totalCorrect = Correct;


$( document ).ready(function() {

$('#sub').on('click', function() {


$('#trueOne').one('click', function() {
    if($('#trueOne').is(':checked')) { 
        Correct += 1;
    console.log(Correct) }
 });

 $('#trueTwo').one('click', function() {
    if($('#trueTwo').is(':checked')) { 
        Correct += 1;
    console.log(Correct) }
 });

 $('#trueThree').one('click', function() {
    if($('#trueThree').is(':checked')) { 
        Correct += 1;
    console.log(Correct) }
 });

});
//Make them determine if the answer was right or wrong//
//If both buttons are selected display error message//
//Create an alert showing which questions they got correct or not//





//Create bottom page timer that will time them//
//When the timer hits 00:00:00 end the quiz and force show answer function// 

});