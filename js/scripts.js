$(document).ready(function(){
    $("#startBtn").click(function(){
        $("#beginning").fadeOut(function(){
            $("#hidden").fadeIn();
        });
    });









    $("#startBtn").click(function(){
        $("form#quiz").show();
    });
});
    


function checkSubmit() {

    var question1 = document.quiz.question1.value; 
    var question2 = document.quiz.question2.value; 
    var question3 = document.quiz.question3.value; 
    var question4 = document.quiz.question4.value; 
    var question5 = document.quiz.question5.value; 
    var question6 = document.quiz.question6.value; 
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var correct = 0;

    if (question1 == "Boolean") {
        correct++;  
        }

    if (question2 == "Returns true if the argument is not a number otherwise it is false") {
        correct++;
        }

    if (question3 == "The head section") {
        correct++;
        }
     if (question4 == "For") {
        correct++;
        }

    if (question5== "57") {
        correct++;
        }

    if (question6 == "No value or object") {
        correct++;
        }

    if (question7 == "alert") {
        correct++;
        }

    if (question7 == "[") {
        correct++;
    }

    var markRange;

    if (correct<1) {
        marks= 3;
    }
    else {
        marks=0;
    }
    if (correct>0 && correct <2) {
        marks = 2;
    }
    else {
        marks=0;
    }
    if (correct > 1 && correct < 3) {
        marks = 2;
    }
    else {
        marks=0;
    }
    if (correct > 2 && correct < 4) {
        marks = 1;
    }
    else {
        marks=0;
    }
    if (correct > 3) {
        marks= 0
    }
    else {
        marks=0;
    }
     
     var percentage = correct/8 * 100
    if(percentage >79){
        message="Excellent work"
    }else if (perceentage > 49) {
        message="Fairly passed"
    } else (percentage < 50) {
        message="Poorly done .Retake test"
    }




    document.getElementById("after_submit").style.visibility ="visible");
    document.getElementById
    

   // document.getElementById("messages").innerHTML = messages[marks];
   // document.getElementById("number_correct").innerHTML = "You got " + percentage + " % .";

    $ ("form#quiz").hide();
    event.preventDefault();


    $("#btnSubmit").click(function(){
        $("#hidden").fadeIn();
    })
}
