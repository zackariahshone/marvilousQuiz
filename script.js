

    $('button').hide();
    $('#start').show();
    $('#final').hide();
   
   let x=0;
   let h=0;

    let theTime = '';
   ////////////////////////////////////////// 
   function timer(){
       x = 60; 
       theTime = setInterval(() => {
        
       $('.timer').text('Timer: ' + x);
       // console.log("the time" + x);
        
        if( x % 10 === 0 ){
           // $('.hints-box').prepend("api hints");
        }
        if(x === 0){
            
            clearInterval(theTime);
            myTimer = setInterval(theTime, 1000);
        }
        x--;
    }, 1000);
   }
   ///////////////////////////////////////////////////
   function reset(timer){
       clearInterval(timer);
   }
  //////////////////////////////////////////////////////
   

// const randChar = Math.floor(Math.random() * 61-1)
let hints = 0;
function charGen(){
    const queryTerm = charArr[Math.floor(Math.random() * charArr.length)];
    // console.log('Char Index: ' +charIndex);
    console.log(queryTerm);
    const APIKey = "134975468255420";
    const queryURL = "https://www.superheroapi.com/api.php/" + APIKey + "/search/" + queryTerm + "/image"
    let y =0;
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

                        const randImg = $('img');
                        $('.hero-box').append(randImg);
                        const imgUrl = response.results[0].image.url;
                        $('#answer').text(response.results[0].name)
                        const hero = randImg.attr('src', imgUrl );

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

                // fillBtn();
                        
            $('.hints-box').empty();
           const hint = [
               //    "Alias: " + response.results[0].biography.aliases,
               "Alias: " + aliasHint,
               //    "Alignment: " + response.results[0].biography.alignment,
               "Alignment: " + alignmentHint,
               //    "Alterego: " + response.results[0].biography.alterego,
               "Alter Ego: " + altEgoHint,
               // "Conections: " +  response.results[0].biography.connections.group-affiliation,
               //    "Publisher: " + response.results[0].biography.publisher
               "Publisher: " + pubHint
               //response.results[0].biography.aliases
            ]

            for(let i = 0; i < hint.length; i++){
                console.log('Hints: ' + hint[i]);
            }
             
            hints = setInterval(() => {
                
                $(".hints-box").append("<p>"+ hint[h] +"</p>"); 
                h++;
               // console.log('Hint Number ' + h);
                if(h === 4){
                    h=0;
                    clearInterval(hints);
                }
            }, 1000*10);
        })
    }
    //fill buttons
  

    //start the game   
    $('#start').click(function(){
        
        timer();
        $('.buttons').show();

        ImgNbtn();

        $("#qNumber").text("HERO: 1/5");
        displayHints(Math.floor(Math.random() * 61-1));

        // fillBtn();

        $("#qNumber").text("HERO: 1/5");
        // charGen(Math.floor(Math.random() * 61-1));
        

        $('#start').hide();

    });
    //set the number of question being displayed and switch char
    //
    //
    let questionNum = 1;
    $(".buttons").click(function(){
        $('.hints-box').empty();
        reset(theTime);
        reset(hints);
        timer();

        ImgNbtn();
        displayHints(Math.floor(Math.random() * 61-1));


        fillBtn();
        // charGen(Math.floor(Math.random() * 61-1));

        // fillBtn();
        // charGen(Math.floor(Math.random() * 61-1));
        charGen();
 
 
        questionNum++;
        $("#qNumber").text('HERO: ' + questionNum + "/5");
       
        const answer = (this).innerHTML;
        console.log("THIS IS THE ANSWER " + answer);
        console.log("THIS IS THE QUERY TERM: " +queryTerm);
        if (answer === queryTerm){
            alert('correct answer');
            //window.open("win.html");
            // localStorage.getItem("score");
            userScore = parseInt(userScore) + 5;
            console.log(userScore);
            localStorage.setItem("score", userScore);
        } 

        if(questionNum > 5){
            $('#final').show();
        }
    });
    
    $('#clear').click(function(){
        $('.hints-box').empty();
    })
    








