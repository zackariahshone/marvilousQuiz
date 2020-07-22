function fillBtn(queryTerm) {

    // let queryTerm = ""
    let random1 = ""
    let random2 = ""
    let random3 = ""
    let userScore = localStorage.getItem("score");
    // console.log(userScore);
    if ((userScore === null)) {
        userScore = 0;
    }
    // console.log(userScore);
    localStorage.setItem("score", userScore);
    const scoreHolder = document.getElementById("score");
    // queryTerm = charArr[Math.floor(Math.random() * charArr.length)];
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
    
    //  console.log(queryTerm);
    //  console.log(random1);
    //  console.log(random2);
    //  console.log(random3);
    // /////   queryTerm
    //         random1
    //         random2
    //         random3 variables are full! 

    const buttonArr = _.shuffle([queryTerm, random1, random2, random3]);
    console.log('query term from Joe ' + queryTerm);
    console.log("button array " + buttonArr);

    for (let i = 0; i < buttonArr.length; i++) {
        const buttonText = buttonArr[i];
        console.log('button text ' + buttonText);
        $('#' + i).text(buttonText);
    }

    const APIKey = "134975468255420";
    const queryURL = "https://www.superheroapi.com/api.php/" + APIKey + "/search/" + queryTerm + "/image" 

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(returnData) {

//     const charImgURL = (returnData.results[0].image.url);
//     //console.log(charImgURL);

//     const randImg = $('img');
//      $('.hero-box').append(randImg);
//      const imgUrl = returnData.results[0].image.url;
//      $('#answer').text(returnData.results[0].name)
//       const hero = randImg.attr('src', imgUrl );
      
// });  

console.log(userScore);



$(".buttons").on("click", function(){
//     reset(theTime);
//    reset(hints);
//     timer();
//     ImgNbtn();
//     displayHints();
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
})

}