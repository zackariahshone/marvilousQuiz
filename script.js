$(document).ready(function () {
   let x;
   

   function timer(){
       x = 60;
    
   let theTime = setInterval(() => {
       
       $('.timer').text('Timer: ' + x);
   
        
        if( x % 10 === 0 ){
            $('.hints-box').prepend("api hints");
        }
        if(x === 0){
            clearInterval(theTime);
        }
        x--;
    }, 1000);
   }

   timer();

const queryTerm ="wolverine"
const APIKey = "134975468255420";
const queryURL = "https://www.superheroapi.com/api.php/" + APIKey + "/search/" + queryTerm + "/image"
let y =0;
   $.ajax({
       
       url: queryURL,
       method: "GET",
       
       success: function (response) {
           console.log(response);
           //.hero-box
           setInterval(() => {
         
            const randImg = $('img');
            $('.hero-box').append(randImg);
            const imgUrl = response.results[0].image.url;
            y++;
            if(y > 0){
                y=0;
            }
          const hero = randImg.attr('src', imgUrl );
          
            
          
         }, 1000);

       }
   });

});
