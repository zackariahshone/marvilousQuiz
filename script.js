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
    "Black Panther"
]
let queryTerm =""
let random1 = ""
let random2 = ""
let random3 = ""

queryTerm = charArr[Math.floor(Math.random() * charArr.length)]; 
random1 = charArr[Math.floor(Math.random() * charArr.length)];
if (random1 === queryTerm){
    do {random1 = charArr[Math.floor(Math.random() * charArr.length)];
    }
    while (random1 === queryTerm);
} 
random2 = charArr[Math.floor(Math.random() * charArr.length)];
if  (random2 === queryTerm || random2 === random1){
    do{random2 = charArr[Math.floor(Math.random() * charArr.length)];
    }
    while (random2 === queryTerm || random2 === random1);
}    
random3 = charArr[Math.floor(Math.random() * charArr.length)];
if (random3 === queryTerm || random3 === random1 || random3 === random2){
    do {random3 = charArr[Math.floor(Math.random() * charArr.length)];
    }
    while (random3 === queryTerm || random3 === random1 || random3 === random2);
}
       
     console.log(queryTerm);
     console.log(random1);
     console.log(random2);
     console.log(random3);

     const buttonArr = _.shuffle([queryTerm, random1, random2, random3]);
     console.log(buttonArr);

     for (let i = 0; i < buttonArr.length; i++){
         const buttonText = buttonArr[i];
         console.log(buttonText);
         const answerButton = document.createElement("li");
         console.log(answerButton);
         answerButton.innerHTML = buttonText;
         const buttonDiv = document.getElementById("buttons");
         buttonDiv.append(answerButton);

     }


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