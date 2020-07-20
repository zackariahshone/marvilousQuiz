$(document).ready(function () {
   $('#final').hide();
   let x;
   let h=0;

   function timer(){
//        x = 60;
//    let theTime = setInterval(() => {
//        $('.timer').text('Timer: ' + x);

        
//         if( x % 10 === 0 ){
//            // $('.hints-box').prepend("api hints");
//         }
//         if(x === 0){
//             clearInterval(theTime);
//         }
//         x-1;
//     }, 1000);
   }

  



function charGen(){
    const randChar = Math.floor(Math.random() * 61-1)
    timer();
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
              // "Conections: " +  response.results[0].biography.connections.group-affiliation,
               "Publisher: " + response.results[0].biography.publisher
               //response.results[0].biography.aliases
            ]
            
            const randImg = $('img');
            $('.hero-box').append(randImg);
            const imgUrl = response.results[0].image.url;
            $('#answer').text(response.results[0].name)
           
            const hero = randImg.attr('src', imgUrl );
            
            const hints = setInterval(() => {
                // $(".hints-box").append("<p>"+ hint[h] +"</p>"); 
                // h+1;
                // if(h>5){
                //     h=0;
                //     clearInterval(hints);
                // }
            }, 1000*10);
            
        }
    });
}
    
    $('#start').click(function(){
        $("#qNumber").text("HERO: 1/5");
        charGen();
        $('#start').hide();
    });
    let questionNum = 1;
    // $("#answer").click(function(){

    //     charGen();
    //     questionNum++;
    //     $("#qNumber").text('HERO: ' + questionNum + "/5");
    //     if(questionNum > 5){
    //         $('#final').show();

    //     }
        
    // })
    
});



