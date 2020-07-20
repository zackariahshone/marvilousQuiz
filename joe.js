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