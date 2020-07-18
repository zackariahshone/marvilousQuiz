<<<<<<< HEAD
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
    $("#answer").click(function(){
        charGen();
        questionNum++;
        $("#qNumber").text('HERO: ' + questionNum + "/5");
        if(questionNum > 5){
            $('#final').show();

        }
        
    })
    
});
=======
const charArr = [
    "A-Bomb",
    "Abe Sapien",
    "Abin Sur",
    "Abomination",
    "Abraxas",
    "Absorbing Man",
    "Adam Monroe",
    "Adam Strange",
    "Agent 13",
    "Agent Bob",
    "Agent Zero",
    "Air-Walker",
    "Ajax",
    "Alan Scott",
    "Alex Mercer",
    "Alex Woolsly",
    "Alfred Pennyworth",
    "Alien",
    "Allan Quatermain",
    "Amazo",
    "Ammo",
    "Ando Masahashi",
    "Angel",
    "Animal Man",
    "Annihilus",
    "Ant-Man",
    "Anti-Monitor",
    "Anti-Spawn",
    "Anti-Venom",
    "Apocalypse",
    "Aquaman",
    "Archangel",
    "Arclight",
    "Ares",
    "Astro Boy",
    "Atlas",
    "Atom",
    "Atom Girl",
    "Aurora",
    "Azrael",
    "Aztar",
    "Bane",
    "Banshee",
    "Batgirl",
    "Batman",
    "Beast",
    "Beast Boy",
    "Beetle",
    "Ben 10",
    "Beta Ray Bill",
    "Beyonder",
    "Big Barda",
    "Bird-Man",
    "Bishop",
    "Bizarro",
    "Black Adam",
    "Black Bolt",
    "Black Canary",
    "Black Cat",
    "Black Manta",
    "Black Panther",
]
let queryTerm =""
let random1 = ""
let random2 = ""
let random3 = ""

    queryTerm = charArr[Math.floor(Math.random() * charArr.length)]; 
    random1 = charArr[Math.floor(Math.random() * charArr.length)];  
    random2 = charArr[Math.floor(Math.random() * charArr.length)];    
    random3 = charArr[Math.floor(Math.random() * charArr.length)];
       
     console.log(queryTerm);
     console.log(random1);
     console.log(random2);
     console.log(random3);



const APIKey = "134975468255420";
const queryURL = "https://www.superheroapi.com/api.php/" + APIKey + "/search/" + queryTerm + "/image" 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(returnData) {

    const charImgURL = (returnData.results[0].image.url);
    console.log(charImgURL);
    const imageDiv = $('<div>');
    const charImg = $('<img>');
    charImg.attr('src', charImgURL);
    imageDiv.append(charImg);
    $('#image-holder').prepend(charImg);

});  
>>>>>>> e74d159f1fa9598da38a82f8946ea1761d9c1404
