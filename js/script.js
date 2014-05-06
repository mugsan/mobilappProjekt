

var answer = Math.floor((Math.random() * 100) + 1);
var tries = 0;

function guess(){
    
    tries += 1;
    
    var val = document.getElementById("inputBox").value;
    
    if(val > answer){
      
        var highest = document.getElementById("higherNumber").innerHTML;
        
        if(val < highest) document.getElementById("higherNumber").innerHTML = val;
        
    }

    else if(val < answer){
        console.log("hej");
     
         var lowest = document.getElementById("lowerNumber").innerHTML;
        
         if(val > lowest) document.getElementById("lowerNumber").innerHTML = val;
    }
    
    else {
        
        alert("CO-CO-CO-CORRECT!!!!\n");   
        
        var highscore = localStorage.getItem("highscore");
        
        
        
    }
    
    
}

