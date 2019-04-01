$(document).ready(function () {
    $("#startBtn").click(function () {
        $("#beginning").fadeOut(function () {
            $("#hidden").fadeIn();
        });
    });

    $("#btnSubmit").click(function () {
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

        if (question5 == "57") {
            correct++;
        }

        if (question6 == "No value or object") {
            correct++;
        }

        if (question7 == "alert") {
            correct++;
        }

        if (question8 == "[") {
            correct++;
        }


        var percentage = (correct / 7) * 100


        if (percentage > 79) {
            $("#hidden").fadeOut(function () {
                $("#results").fadeIn(function () {
                    $(".status").text(`Congratulations!`)
                    $(".status2").text(`You have passed excellently!`)
                    $(".show-score").text(`  Your score is: ${percentage}%`);
                })
            })


        } else if (percentage > 49) {
            $("#hidden").fadeOut(function () {
                $("#results").fadeIn(function () {
                    $(".status").text(`Congratulations!`)
                    $(".status2").text(`You have passed fairly!`)
                    $(".show-score").text(`Your score is:  ${percentage}%`)
                });
            });
        } else {
            $("#hidden").fadeOut(function () {
                $("#results").fadeIn(function () {
                    $(".status").text(`You have have failed!`)
                    $(".status2").text(`Retake the quiz when ready!`)
                    $(".show-score").text(`  Your score is:${percentage}%`)
                    $("#retake-btn ").fadeIn(function () {
                        $("#retake-btn").click(function () {
                            $("#results").fadeOut(function () {
                                $("#hidden").fadeIn();
                            })
                        })
                    });
                })
            })
        }



    })
})



























