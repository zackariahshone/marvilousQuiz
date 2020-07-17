$(document).ready(function () {


   
   let x;
   let h=0;

   function timer(){
       x = 60;
    
   let theTime = setInterval(() => {
       
       $('.timer').text('Timer: ' + x);
   
        
        if( x % 10 === 0 ){
           // $('.hints-box').prepend("api hints");
        }
        if(x === 0){
            clearInterval(theTime);
        }
        x--;
    }, 1000);
   }

   timer();

const randChar = Math.floor(Math.random() * 61-1)

const queryTerm = charArr[randChar];
console.log(randChar);
console.log(queryTerm);
const APIKey = "134975468255420";
const queryURL = "https://www.superheroapi.com/api.php/" + APIKey + "/search/" + queryTerm + "/image"
let y =0;
   $.ajax({
       
       url: queryURL,
       method: "GET",
       
       success: function (response) {
           console.log(response);
           //.hero-box
           const hint = [
           "Alias: " + response.results[0].biography.aliases,
            "Alignment: " + response.results[0].biography.alignment,
            "Alterego: " + response.results[0].biography.alterego,
          //response.results[0].biography.aliases
           ]
           
            const randImg = $('img');
            $('.hero-box').append(randImg);
            const imgUrl = response.results[0].image.url;
            $('#answer').text(response.results[0].name)
            y++;
            if(y > 0){
                y=0;
            }
          const hero = randImg.attr('src', imgUrl );

          setInterval(() => {
             
           
            $(".hints-box").append("<p>"+ hint[h] +"</p>"); 
           // $('.hints-box').append(theHint);
            h++;
        }, 10000);
          
       }
   });

});
