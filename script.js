$(document).ready(function () {
    
    $('.hid').hide();
    $('.container-button').hide();
    $('.gif-box').hide();
    $('#start').show();
    $('#final').hide();

    let x = 0;
    let h = 0;

    let theTime = '';
    ////////////////////////////////////////// 
    function timer() {
        x = 60;
        theTime = setInterval(() => {

            $('.timer').text('Timer: ' + x);
            // console.log("the time" + x);

            if (x % 10 === 0) {
                // $('.hints-box').prepend("api hints");
            }
            if (x === 0) {

                clearInterval(theTime);
                myTimer = setInterval(theTime, 1000);
            }
            x--;
        }, 1000);
    }
    ///////////////////////////////////////////////////
    function reset(timer) {
        clearInterval(timer);
    }
    //////////////////////////////////////////////////////
    function shrinkHeading(){
        $('#heading').css('font-size','70px')
    }

    // const randChar = Math.floor(Math.random() * 61-1)
    let hints = 0;
    let userScore = localStorage.getItem("score");
    console.log(userScore);
    if ((userScore === null)) {
        userScore = 0;
    }
    localStorage.setItem("score", userScore);
    let scoreHolder = document.getElementById("score");
    function charGen() {
        const queryTerm = charArr[Math.floor(Math.random() * charArr.length)];
        // console.log('Char Index: ' +charIndex);
        console.log(queryTerm);
        const APIKey = "134975468255420";
        const queryURL = "https://www.superheroapi.com/api.php/" + APIKey + "/search/" + queryTerm + "/image"
        // let y = 0;
        $.ajax({

            url: queryURL,
            method: "GET",

            success: function (response) {
                console.log(response);
                let aliasHint = response.results[0].biography.aliases;
                if (aliasHint === undefined) {
                    aliasHint = "None"
                };
                let alignmentHint = response.results[0].biography.alignment;
                if (alignmentHint === undefined) {
                    alignmentHint = "None"
                };
                let altEgoHint = response.results[0].biography.alterego;
                if (altEgoHint === undefined) {
                    altEgoHint = "None"
                };
                let pubHint = response.results[0].biography.publisher;
                if (pubHint === undefined) {
                    pubHint = "None"
                };

                let random1 = "";
                let random2 = "";
                let random3 = "";

                const randImg = $('img');
                $('.hero-box').append(randImg);
                const imgUrl = response.results[0].image.url;
                $('#answer').text(response.results[0].name)
                const hero = randImg.attr('src', imgUrl);

                random1 = charArr[Math.floor(Math.random() * charArr.length)];
                if (random1 === queryTerm) {
                    do {
                        random1 = charArr[Math.floor(Math.random() * charArr.length)];
                    }
                    while (random1 === queryTerm);
                }
                random2 = charArr[Math.floor(Math.random() * charArr.length)];
                if (random2 === queryTerm || random2 === random1) {
                    do {
                        random2 = charArr[Math.floor(Math.random() * charArr.length)];
                    }
                    while (random2 === queryTerm || random2 === random1);
                }
                random3 = charArr[Math.floor(Math.random() * charArr.length)];
                if (random3 === queryTerm || random3 === random1 || random3 === random2) {
                    do {
                        random3 = charArr[Math.floor(Math.random() * charArr.length)];
                    }
                    while (random3 === queryTerm || random3 === random1 || random3 === random2);
                }

                const buttonArr = _.shuffle([queryTerm, random1, random2, random3]);
                console.log("button array " + buttonArr);

                for (let i = 0; i < buttonArr.length; i++) {
                    const buttonText = buttonArr[i];
                    console.log('button text ' + buttonText);
                    $('#' + i).text(buttonText);
                }
               
                $('.hints-box').empty();
                const hint = [                    
                    "Alias: " + aliasHint,                    
                    "Alignment: " + alignmentHint,                 
                    "Alter Ego: " + altEgoHint,                 
                    "Publisher: " + pubHint                 
                ]

                for (let i = 0; i < hint.length; i++) {
                    console.log('Hints: ' + hint[i]);
                }
          
                hints = setInterval(() => {

                    $(".hints-box").append("<p>" + hint[h] + "</p>");
                    h++;
                   
                    if (h === 4) {
                        h = 0;
                        clearInterval(hints);
                    }
                }, 1000 * 10);

                $(".buttons").on("click", function(){
                    ////Add giphy 
                    const answer = (this).innerHTML;
                    console.log(answer);
                    console.log(queryTerm);
                    if (answer === queryTerm){                    
                        userScore = parseInt(userScore) + 5;
                        console.log(userScore);
                        localStorage.setItem("score", userScore);
                        scoreHolder.innerHTML = ("Score: " + userScore);
                    } 
                })
            }
            
        });
    }

    //start the game   
    $('#start').click(function () {
        shrinkHeading();
        $('.hid').show();
        userScore = 0
        localStorage.setItem("score", userScore);

        timer();
        $('.container-button').show();
        $("#qNumber").text("HERO: 1/5");
       // displayHints(Math.floor(Math.random() * 61-1));
        // fillBtn();
        $("#qNumber").text("HERO: 1/5");
        
        charGen();
        $('#start').hide();

    });
    //set the number of question being displayed and switch char
    //
    //
    let questionNum = 1;
    $(".buttons").click(function () {
        $('.hints-box').empty();
        reset(theTime);
        reset(hints);
        timer();
        // fillBtn();
        // charGen(Math.floor(Math.random() * 61-1));

        charGen();
        questionNum++;
        $("#qNumber").text('HERO: ' + questionNum + "/5");

        if (questionNum > 5) {
            // $('#final').show();
            // console.log(finalScore);
            // $('.hints-box').empty();
            // $('.timer').hide();
            window.open('FinalScore.html');
            window.close('index.html');
            // let finalScore = localStorage.getItem("score");  
            // console.log(finalScore);          
            // finalHolder = document.getElementById('finalScore');


            // finalHolder.innerHTML = (finalScore);

            // $("#final").attr("href", "final.html");
            // userScore = 0
            // localStorage.setItem("score", userScore);


        }
    });

    $('#clear').click(function () {
        $('.hints-box').empty();
    })

});







