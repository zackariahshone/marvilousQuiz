
$(document).ready(function () {
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
function charGen(charIndex){
    const queryTerm = charArr[charIndex];
    console.log('Char Index: ' +charIndex);
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
                if (aliasHint === undefined){
                    aliasHint = "None"
                };            
            let alignmentHint = response.results[0].biography.alignment
                if (alignmentHint === undefined){
                    alignmentHint = "None"
                };
            let altEgoHint = response.results[0].biography.alterego
                if (altEgoHint === undefined){
                    altEgoHint = "None"
                };
            let pubHint = response.results[0].biography.publisher
                if (pubHint === undefined){
                    pubHint = "None"
                };

            $('.hints-box').empty();
           const hint = [
            //    "Alias: " + response.results[0].biography.aliases,
               "Alias: " + aliasHint,
            //    "Alignment: " + response.results[0].biography.alignment,
               "Alignment: " + alignmentHint,
            //    "Alterego: " + response.results[0].biography.alterego,
               "Alterego: " + altEgoHint,
              // "Conections: " +  response.results[0].biography.connections.group-affiliation,
            //    "Publisher: " + response.results[0].biography.publisher
               "Publisher: " + pubHint
               //response.results[0].biography.aliases
            ]

            for(let i = 0; i < hint.length; i++){
                console.log('Hints: ' + hint[i]);
            }
            
            const randImg = $('img');
            $('.hero-box').append(randImg);
            const imgUrl = response.results[0].image.url;
            $('#answer').text(response.results[0].name)
           
            const hero = randImg.attr('src', imgUrl );
            
            hints = setInterval(() => {
                
                $(".hints-box").append("<p>"+ hint[h] +"</p>"); 
                h++;
                console.log('Hint Number ' + h);
                if(h === 5){
                    h=0;
                    clearInterval(hints);
                }
            }, 1000*10);
        }
    });
}
    //fill buttons
    function fillBtn(){

        // for(let i = 1; i < 4; i++){
        //     $('#' + i).text(charArr[Math.floor(Math.random() * 61-1)]);
        //     console.log("Fill button " + charArr[Math.floor(Math.random() * 61-1)]);
        // }
    }


    //start the game   
    $('#start').click(function(){
      
        timer();
        $('.btnAns').show();
        fillBtn();

        $("#qNumber").text("HERO: 1/5");
        charGen(Math.floor(Math.random() * 61-1));
        $('#start').hide();

    });
    //set the number of question being displayed and switch char
    //
    let questionNum = 1;
    $("#answer").click(function(){
        $('.hints-box').empty();
        reset(theTime);
        reset(hints);
        timer();
        fillBtn();
        charGen(Math.floor(Math.random() * 61-1));
        questionNum++;
        $("#qNumber").text('HERO: ' + questionNum + "/5");
        if(questionNum > 5){
            $('#final').show();
        }
    });
    
    $('#clear').click(function(){
        $('.hints-box').empty();
    })
    
});







