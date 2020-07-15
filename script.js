let queryTerm =""
let random1 = ""
let random2 = ""
let random3 = ""


const charArr =[
    "A-Bomb",
"Abe Sapien",
"Abin Sur",
"Abomination",
"Abraxas",
"Absorbing Man",
"Adam Monroe",
"Adam Strange",
"Agent 13",
"Agent Bob"]

for (let i=1; i < 4; i++){
    if(queryTerm=""){
        queryTerm = charArr[Math.floor(Math.random() * charArr.length)];
        
     } else if (random1 !== queryTerm){
         random1 = charArr[Math.floor(Math.random() * charArr.length)];
        //  i++;
     
     } else if (random2 !== queryTerm){
         random2 = charArr[Math.floor(Math.random() * charArr.length)];
        //  i++;
     }
      else if (random3 !== queryTerm){
         random3 = charArr[Math.floor(Math.random() * charArr.length)];
        //  i++;
     }
     console.log(queryTerm);
     console.log(random1);
     console.log(random2);
     console.log(random3);
}

// const queryTerm =""
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