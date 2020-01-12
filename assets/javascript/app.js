//Create conditional .on(click) statements when buttons are pushed//
var Correct = 0;
var totalIncorrect = 3;



$( document ).ready(function() {




$('#trueOne').on('click', function() {
    if($('#trueOne').is(':checked')) { 
        Correct += 1;
    alert(Correct); }
    else if ($('#falseOne').is(':checked')) { 
        Correct -= 1;
    console.log(Correct) }
 });

 $('#trueTwo').on('click',function() {
    if($('#trueTwo').is(':checked')) { 
        Correct += 1;
    console.log(Correct) }
    else if ($('#falseTwo').is(':checked')) { 
        Correct -= 1;
    console.log(Correct) }
 });

 $('#trueThree').on('click', function() {
    if($('#trueThree').is(':checked')) { 
        Correct += 1;
        console.log(Correct) 
     }
     else if ($('#falseThree').is(':checked')) { 
        Correct -= 1;
    console.log(Correct) }
 });

    if (Correct === 3) {
        alert('YOU BEAT ME AT MY OWN GAME!');
    }

    setTimeout(function() {
        alert("You took too long, now your candy's gone!")
        window.location.reload()
    }, 20000);

});
//Make them determine if the answer was right or wrong//
//If both buttons are selected display error message//
//Create an alert showing which questions they got correct or not//





//Create bottom page timer that will time them//

//When the timer hits 00:00:00 end the quiz and force show answer function// 


