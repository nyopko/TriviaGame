// Put all of the questions and elements into a function so i can just hide the whole function instead of hiding every element by hand
$(document).ready(function () {

    /// Setting the Answers

    // var timeRemaining;
    var score = 0;
    var  timernumber =31;
    var intervalId;

    function run() {
        intervalId = setInterval(decrement, 1000);
      }
  
      function decrement() {
  
        timernumber--;
  
        $("#timer").text(timernumber);
  
        if (timernumber < 1) {
  
          
          timernumber=31;
          
  
          intervalId;
          stop();
            $("#buttons, #correct, #scorebox, #timerbox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        
        }
      }

      function stop() {

        clearInterval(intervalId);
        timernumber=31;
        
        
      }

    // var answerA = ["a","b","c"]
    var answerA = {
        question1: "deadmau5",
        question2: "Guy-Manuel de Homem-Christo",
        question3: "House",
        question4: "Skream",
        question5: "Kaskade",
        question6: "European Dance Conference",
        question7: "Ferry Corsten",
        question8: "California",
        question9: "Tiesto",
        question10: "Alesso",
    }

    var answerB = {
        question1: "Excision",
        question2: "Xavier de Rosnay",
        question3: "Dubstep",
        question4: "SBTRKT",
        question5: "Marshmello",
        question6: "Everyone's Dancing Combined",
        question7: "Gesaffelstein",
        question8: "Florida",
        question9: "Nina Kraviz",
        question10: "Nicky Romero",
    }

    var answerC = {
        question1: "Skrillex",
        question2: "Mike Lévy",
        question3: "Trance",
        question4: "Squarepusher",
        question5: "deadmau5",
        question6: "Electric Daisy Carnival",
        question7: "Armin Van Buuren",
        question8: "New York",
        question9: "Arty",
        question10: "Rezz",
    }

    var answerD = {
        question1: "Steve Aoki",
        question2: "Gaspard Augé",
        question3: "Techno",
        question4: "Aphex Twin",
        question5: "Bear Grillz",
        question6: "Electronic Dance Music Co-op",
        question7: "David Guetta",
        question8: "Ohio",
        question9: "Zedd",
        question10: "Pryda",
    }

    var facts = {
        fact1: "C. Skrillex | Born Sonny John Moore, this former emo frontman has become one of the most acclaimed and influential artists in all of dance music.",
        fact2: "A. Guy-Manuel de Homem-Christo |  Alongside Thomas Bangalter, the two French legends make up the masked sensation known for decades of massive dance and pop music hits.",
        fact3: "D. Techno | Movement Festival, one of the leading techno festivals in the world that many have dubbed 'Techno Christmas' is held annually in Detroit.",
        fact4: "D. Aphex Twin | This mysterious music producer has released and announced new music on both the deep web and by flying a blimp over London. He also released an album played by robots he programmed to play accoustic instruments.",
        fact5: "A. Kaskade | deadmau5, Marshmello, and Bear Grillz are all known for their signature masks. Although, Chicago's Kaskade does not wear a mask, he is the only artist on the list to have recorded a full-length Christmas album. ",
        fact6: "C. Electric Daisy Carnival | Since its conception in 1997, EDC has grown from an underground warehouse party, to an international event chain with EDC-branded music festivals in USA, Mexico, Japan, China, and more.",
        fact7: "B. Gesaffelstein | Alongside his work with Kanye West, Gesaffelstein has worked with The Weeknd, A$AP Rocky, Lana Del Rey, Phoenix, and was featured on the soundtrack for Grand Theft Auto V.",
        fact8: "D. Ohio | Located just outside of Columbus, Ohio, the prehistoric themed Lost Lands Festival features 1,000,000 Watts of bass and over 100 lifesized dinosaur replicas.",
        fact9: "A. Tiesto | Born Tijs Michiel Verwest, many consider Tiesto the 'Godfather of EDM'. He was also voted The #1 DJ in the World three years in a row. (2002-2004)",
        fact10: "C. Rezz | Signed to deadmau5's label mau5trap, Rezz (real name Isabelle Rezazadeh) is one of the biggest up-and-coming artists in dance music. Her signature dark, midtempo sound has helped the one they call 'Space Mom' sell out venues and headline festivals all over the world. ",
    }

////////////////////// SCOREEEEEEEEEEEEEEEEEEEEEEEEEEE

    // $("#scorenumber").append(score);

    function startgame() {

    

        $(".startbutton").click(function () {
            $("#buttons").show();
            $("#startbutton").hide();
            $("#question").show();
            $("#timerbox").show();
            $("#scorebox").show();

            
            run();
            question1();
            
        });
  
    }


    function question1() {

        $(".choiceA").text(answerA.question1);
        $(".choiceB").text(answerB.question1);
        $(".choiceC").text(answerC.question1);
        $(".choiceD").text(answerD.question1);
        $("#question").text("This Los Angeles-born DJ/Producer is an eight-time Grammy Award winner and is widely considered one of the artists responsible for the rise of modern-day EDM in America. ");



        $(".choiceC").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            // if (score < 1) {
                score++;
            // };
        
            
            
        });

        $(".choiceA, .choiceB, .choiceD").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
           
        });

        $("#nextbutton").click(function () {
            question2();
        });

    }


    function question2() {

        /// formatting back to question format

        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact2);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/daftpunk.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167675625&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        

        ///// Generating answers
        
        $(".choiceA").text(answerA.question2);
        $(".choiceB").text(answerB.question2);
        $(".choiceC").text(answerC.question2);
        $(".choiceD").text(answerD.question2);
        $("#question").text("Which of the following is the real name of one of the members of France's legendary dance music group, Daft Punk?");

        $(".choiceA").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            // if (score < 2) {
                score++;
            // };

        });

        $(".choiceB, .choiceC, .choiceD").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question3();
        });

        $("#scorenumber").text(score);

    }

    function question3() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact3);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/techno.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/338244858&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question3);
        $(".choiceB").text(answerB.question3);
        $(".choiceC").text(answerC.question3);
        $(".choiceD").text(answerD.question3);
        $("#question").text("With roots in Detroit, this sub-genre of electronic dance music has been described as 'mechanical, cold, austere, and metropolitan'.");

        $(".choiceD").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            

            // if (score < 3) {
                score++;
            // };
            
        });

        $(".choiceA, .choiceB, .choiceC").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question4();
        });

        $("#scorenumber").text(score);
    }

    function question4() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact4);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/aphextwin.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/5174841&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question4);
        $(".choiceB").text(answerB.question4);
        $(".choiceC").text(answerC.question4);
        $(".choiceD").text(answerD.question4);
        $("#question").text("This enigmatic IDM producer has been rumored to drive a decomissioned tank, live in a bank vault, and has thrown a food processor at a fan in the crowd of one of his shows.");

        $(".choiceD").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            // if (score < 4) {
                score++;
            // };

        });

        $(".choiceA, .choiceB, .choiceC").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question5();
        });

        $("#scorenumber").text(score);
    }

    function question5() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact5);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/kaskade.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/216101530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question5);
        $(".choiceB").text(answerB.question5);
        $(".choiceC").text(answerC.question5);
        $(".choiceD").text(answerD.question5);
        $("#question").text("Many popular DJs are anonymous or wear masks on stage. Which one of the following DJs does NOT wear a mask on stage?");

        $(".choiceA").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            if (score < 5) {
                score++;
            };

        });

        $(".choiceB, .choiceC, .choiceD").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question6();
        });
        $("#scorenumber").text(score);
    }

    function question6() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact6);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/edc.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329402025&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question6);
        $(".choiceB").text(answerB.question6);
        $(".choiceC").text(answerC.question6);
        $(".choiceD").text(answerD.question6);
        $("#question").text("EDC is one of the world's largest music festival and most iconic dance music festivals in the world. What does 'EDC' stand for?");

        $(".choiceC").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            if (score < 6) {
                score++;
            };

        });

        $(".choiceA, .choiceB, .choiceD").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question7();
        });
        $("#scorenumber").text(score);
    }

    function question7() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact7);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/gesa.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146405296&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question7);
        $(".choiceB").text(answerB.question7);
        $(".choiceC").text(answerC.question7);
        $(".choiceD").text(answerD.question7);
        $("#question").text("This French DJ known for his unique fusion of techno and bass music is credited on Kanye West's album, 'Yeezus'.");

        $(".choiceB").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            if (score < 7) {
                score++;
            };

        });

        $(".choiceA, .choiceC, .choiceD").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question8();
        });
        $("#scorenumber").text(score);
    }

    function question8() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact8);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/lostlands.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/362167385&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question8);
        $(".choiceB").text(answerB.question8);
        $(".choiceC").text(answerC.question8);
        $(".choiceD").text(answerD.question8);
        $("#question").text("Dubstep pioneer Excision is the founder of the world's largest bass music festival, 'Lost Lands'. Where is this annual festival located?");

        $(".choiceD").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            if (score < 8) {
                score++;
            };
            
        });

        $(".choiceA, .choiceB, .choiceC").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question9();
        });
        $("#scorenumber").text(score);
    }

    function question9() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact9);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/tiesto.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/145190806&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question9);
        $(".choiceB").text(answerB.question9);
        $(".choiceC").text(answerC.question9);
        $(".choiceD").text(answerD.question9);
        $("#question").text("Russia's dance music scene has seen massive growth in recent years. Which one of the following artists is NOT from Russia?");

        $(".choiceA").click(function () {
            stop();
            $("#buttons, #wrong, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #correct, #youtube").show();
            
            if (score < 9) {
                score++;
            };

        });

        $(".choiceB, .choiceC, .choiceD").click(function () {
            stop();
            $("#buttons, #correct, #timerbox, #scorebox").hide();
            $("#biopic, #nextbutton, #facttext, #wrong, #youtube").show();
        });

        $("#nextbutton").click(function () {
            question10();
        });
        $("#scorenumber").text(score);
    }

    function question10() {
        stop();
        $("#correct, #wrong, #biopic, #nextbutton, #facttext, #youtube").hide();
        $("#facttext").text(facts.fact10);
        $("#buttons, #timerbox, #scorebox").show();
        $("#biopic").attr('src', "../TriviaGame/assets/images/rezz.jpg");
        $("#video").attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/268383269&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
        run();

        $(".choiceA").text(answerA.question10);
        $(".choiceB").text(answerB.question10);
        $(".choiceC").text(answerC.question10);
        $(".choiceD").text(answerD.question10);
        $("#question").text("Although the EDM world is unfortunately male-dominated, female artists have been finally getting the attention they deserve. Which of the following producers is female?");

        $(".choiceC").click(function () {
            stop();
            $("#buttons, #wrong, #nextbutton, #timerbox, #scorebox").hide();
            $("#biopic, #results, #facttext, #correct, #youtube").show();
            
            if (score < 10) {
                score++;
            };
            // results();
        });

        $(".choiceA, .choiceB, .choiceD").click(function () {
            stop();
            $("#buttons, #correct, #nextbutton, #timerbox, #scorebox, #results").hide();
            $("#biopic, #facttext, #results, #wrong, #youtube").show();
            // results();
        });

        $("#results").click(function () {
            results();
        });
        $("#scorenumber, #finishnumber").text(score);

    }

    function results() {
        $("#buttons, #correct, #nextbutton, #timerbox, #scorebox, #wrong, #facttext, #youtube, #biopic, #question, #results").hide();
        $("#finish, #replay").show();

        $("#scorenumber, #finish").text("Your Score is: " + score);
        // $("#replay").show();
        // function replay() {
        //     startgame();
        // }

        $("#replay").click(function () {
            // $("#replay").hide();
            // $(".startbutton").show();
            startgame();
        });
        
    }

///////////////// REPLAY 

    


    //// calling the core functions that trigger the game to start

    // question1();
    startgame();
    // run();
    $("#correct").hide();
    $("#wrong").hide();
    $("#biopic").hide();
    $("#facttext").hide();
    $("#buttons").hide();
    $("#question").hide();
    $("#timerbox").hide();
    $("#nextbutton").hide();
    $("#youtube").hide();
    $("#scorebox").hide();
    $("#results").hide();
    $("#finish").hide();
    $("#replay").hide();
    

    
    
    // $("#scorenumber").text(score);




});