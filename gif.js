$(document).ready(function () {
    
});


$("#testBtn1,#testBtn2,#testBtn3").on("click", incorrect )

      // Storing our giphy API URL for a random image
        
    //   const queryURL = "https://api.giphy.com/v1/gifs/UX06yZ6erE0fQtU1Sd?api_key=uezAuEzemGKTSD3HTEdz5ueXtRwzLNiL"

   
    const wrongAnswerIds = ["UX06yZ6erE0fQtU1Sd","3ohc1h1vy6Gtv4uOLC","l396QUa4k8rFVK2xW","xT39D14ZQGal0UwS1G","gjs7t0bCR1eX3Ta7Wp","3ohhwxCQmcq7dB6JBm","m8eIbBdkJK7Go","l4FGuhL4U2WyjdkaY","3o6vXR8idD7v8ulzFe","RkcYSKjRo0P5YX6qxb","qYYS2GC0sfPCU","26tk0H3LSMpdL1Wr6","3o6nV6G7ksnvEwXyBq","ZZqroMldngFEhKpJsh"]; 
    function incorrect(){
        $("#gif").show();
const randomWrongID = wrongAnswerIds[Math.floor(Math.random() * wrongAnswerIds.length - 1)];
   
    const queryURL = "https://api.giphy.com/v1/gifs/" + randomWrongID +"?api_key=uezAuEzemGKTSD3HTEdz5ueXtRwzLNiL"
    
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
        .then(function(response) {
            console.log(response);

        // Saving the image_original_url property
          // const imageUrl = response.data[0].images.original.url;
          //the above is how you get image url if you are using search
        const imageUrl = response.data.images.original.url;
        //the above is how you get image url if you are using id  
        console.log(imageUrl);



          // Creating and storing an image tag
          const answerImage = $("#gif");
          

          
          answerImage.attr("src", imageUrl);
          answerImage.attr("alt", "answer image");

          $("#gif-box").prepend(answerImage);
          // Prepending the catImage to the images div
          function gifresponse(){
          setTimeout(function(){ 
              $("#gif").hide(); }, 3000);
            }
            gifresponse();
       
            });
      }


      //Below is code for ramdomized correct answer giphs
      $("#answer").on("click", correct )

      // Storing our giphy API URL for a random image
        
    //   const queryURL = "https://api.giphy.com/v1/gifs/UX06yZ6erE0fQtU1Sd?api_key=uezAuEzemGKTSD3HTEdz5ueXtRwzLNiL"

   
    const correctAnswerIds = ["fvT2lZ7UFAvHpPjmVs","3o7abKhOpu0NwenH3O","s92f9UTsinNDy","fWj2TR9mfYJ56","l2YWykMPCmCb9lLWM","MEdXzJwmTvjpw79Gig","fqn15N41FAbyOTKFWq","hSoY24VXW8ZypOWy0J","TdEeOeLcg6Bj0eyfUl","gffcSKwGREETNo9rsy","fU4hSviMDRPKZTRHUx","dAEhmHqUM1IvJK4jxl","5jUxrY6ClTRUdT1SPE","WqMC58pzv1X6Je8La1"]; 
    function correct(){
        $("#gif").show();
    const randomCorrectID = correctAnswerIds[Math.floor(Math.random() * correctAnswerIds.length - 1)];
    const queryURL2 = "https://api.giphy.com/v1/gifs/" + randomCorrectID +"?api_key=uezAuEzemGKTSD3HTEdz5ueXtRwzLNiL"
    
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL2,
        method: "GET"
      })

      // After the data from the AJAX request comes back
        .then(function(response) {
            console.log(response);

        // Saving the image_original_url property
          // const imageUrl = response.data[0].images.original.url;
          //the above is how you get image url if you are using search
        const imageUrl2 = response.data.images.original.url;
        //the above is how you get image url if you are using id  
        console.log(imageUrl2);



          // Creating and storing an image tag
          const answerImage = $("#gif");
          

          
          answerImage.attr("src", imageUrl2);
          answerImage.attr("alt", "answer image");

          $("#gif-box").prepend(answerImage);
          // Prepending the catImage to the images div
         
          function gifresponse2(){
          setTimeout(function(){ 
              $("#gif").hide(); }, 3000);
            }
            
            gifresponse2();
       
            });
      }
    