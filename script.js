

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
   

const randChar = Math.floor(Math.random() * 61-1)
let hints = 0;
function displayHints(charIndex){
    const queryTerm = charIndex;
    console.log('Char Index: ' + charIndex);
    console.log(queryTerm);
    const APIKey = "134975468255420";
    const queryURL = "https://www.superheroapi.com/api.php/" + APIKey + "/search/" + queryTerm + "/image"
    let y =0;
    $.ajax({
        
        url: queryURL,
        method: "GET"
    }).then(function (response) {
            console.log("SHONE QUERY: " +response);
            $('.hints-box').empty();
           const hint = [
               "Alias: " + response.results[0].biography.aliases,
               "Alignment: " + response.results[0].biography.alignment,
               "Alterego: " + response.results[0].biography.alterego,
              // "Conections: " +  response.results[0].biography.connections.group-affiliation,
               "Publisher: " + response.results[0].biography.publisher
               //response.results[0].biography.aliases
            ]

            for(let i = 0; i < hint.length; i++){
                console.log('Hints: ' + hint[i]);
            }
             
            hints = setInterval(() => {
                
                $(".hints-box").append("<p>"+ hint[h] +"</p>"); 
                h++;
               // console.log('Hint Number ' + h);
                if(h === 5){
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
    








