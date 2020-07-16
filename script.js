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
        x --;
    }, 1000);
   }
  
  
   timer();

  
});
