
$(document).ready(function () {
    $('.hid').hide();
    $('button').hide();
    $('#start').show();
    $('#final').hide();
    $('.gif-box').hide();

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
    //////////////////////////////////////////////////////giphy code

    function incorrect(){
        const wrongAnswerIds = ["UX06yZ6erE0fQtU1Sd","3ohc1h1vy6Gtv4uOLC","l396QUa4k8rFVK2xW","xT39D14ZQGal0UwS1G","gjs7t0bCR1eX3Ta7Wp","3ohhwxCQmcq7dB6JBm","m8eIbBdkJK7Go","l4FGuhL4U2WyjdkaY","3o6vXR8idD7v8ulzFe","RkcYSKjRo0P5YX6qxb","qYYS2GC0sfPCU","26tk0H3LSMpdL1Wr6","3o6nV6G7ksnvEwXyBq","ZZqroMldngFEhKpJsh"]; 
        $(".gif-box").show();
        $("#gif").show();
const randomWrongID = wrongAnswerIds[Math.floor(Math.random() * wrongAnswerIds.length - 1)];
   
    const queryURL = "https://api.giphy.com/v1/gifs/" + randomWrongID +"?api_key=uezAuEzemGKTSD3HTEdz5ueXtRwzLNiL"
    
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
        .then(function(response) {
            console.log(response);

        // Saving the image_original_url property
          // const imageUrl = response.data[0].images.original.url;
          //the above is how you get image url if you are using search
        const imageUrl = response.data.images.original.url;
        //the above is how you get image url if you are using id  
        console.log(imageUrl);



          // Creating and storing an image tag
          const answerImage = $("#gif");
          

          
          answerImage.attr("src", imageUrl);
          answerImage.attr("alt", "answer image");

        //   $(".gif-box").prepend(answerImage);
        
          function gifresponse(){
          setTimeout(function(){ 
              $("#gif").hide(); }, 3500);
            }
            gifresponse();
            
            
          });
          setTimeout(function () {
            // charGen();
        }, 4000);
    }
    function correct(){
        const correctAnswerIds = ["fvT2lZ7UFAvHpPjmVs","3o7abKhOpu0NwenH3O","s92f9UTsinNDy","fWj2TR9mfYJ56","l2YWykMPCmCb9lLWM","MEdXzJwmTvjpw79Gig","fqn15N41FAbyOTKFWq","hSoY24VXW8ZypOWy0J","TdEeOeLcg6Bj0eyfUl","gffcSKwGREETNo9rsy","fU4hSviMDRPKZTRHUx","dAEhmHqUM1IvJK4jxl","5jUxrY6ClTRUdT1SPE","WqMC58pzv1X6Je8La1"]; 
        $(".gif-box").show();
        $("#gif").show();
      const randomCorrectID = correctAnswerIds[Math.floor(Math.random() * correctAnswerIds.length - 1)];
      const queryURL2 = "https://api.giphy.com/v1/gifs/" + randomCorrectID +"?api_key=uezAuEzemGKTSD3HTEdz5ueXtRwzLNiL"
      
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
          url: queryURL2,
          method: "GET"
        })
  
        // After the data from the AJAX request comes back
          .then(function(response) {
              console.log(response);
  
          // Saving the image_original_url property
            // const imageUrl = response.data[0].images.original.url;
            //the above is how you get image url if you are using search
          const imageUrl2 = response.data.images.original.url;
          //the above is how you get image url if you are using id  
          console.log(imageUrl2);
  
  
  
            // Creating and storing an image tag
            const answerImage = $("#gif");
            
  
            
            answerImage.attr("src", imageUrl2);
            answerImage.attr("alt", "answer image");
  
            // $(".gif-box").prepend(answerImage);
            // 
           
            function gifresponse2(){
            setTimeout(function(){ 
                $("#gif").hide(); }, 3500);
              }
              
              gifresponse2();
              
              
         
              });
              setTimeout(function () {
                // charGen();
            }, 4000);
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
                let aliasHint = response.results[0].biography.aliases
                if (aliasHint === undefined) {
                    aliasHint = "None"
                };
                let alignmentHint = response.results[0].biography.alignment
                if (alignmentHint === undefined) {
                    alignmentHint = "None"
                };
                let altEgoHint = response.results[0].biography.alterego
                if (altEgoHint === undefined) {
                    altEgoHint = "None"
                };
                let pubHint = response.results[0].biography.publisher
                if (pubHint === undefined) {
                    pubHint = "None"
                };

                let random1 = ""
                let random2 = ""
                let random3 = ""
                const randImg = $('#heroImage');
                const imgUrl = response.results[0].image.url;
                randImg.attr("src", imgUrl);
                // const randImg = $('img');
                // $('.hero-box').append(randImg);
                // const imgUrl = response.results[0].image.url;
                // $('#answer').text(response.results[0].name)
                // const hero = randImg.attr('src', imgUrl);

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
                        correct();
                     } else{
                        incorrect();
                    }
                })
            }
            
        });
    }

    //start the game   
    $('#start').click(function () {
        $('.hid').show();
        userScore = 0
        localStorage.setItem("score", userScore);

        timer();
        $('.buttons').show();
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







