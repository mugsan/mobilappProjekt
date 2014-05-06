var answer = Math.floor((Math.random() * 100) + 1);

function guess(){
    
    var val = document.inputBox.value;
    
    if(val < answer){
      
      document.write("higher!\n");
    }

    else if(val > answer){
     
        document.write("lower!\n");
    }
    
    else {
        
        alert("CO-CO-CO-CORRECT!!!!\n");   
        
        var highscore = localStorage.getItem("highscore");
        
        
        
    }
    
    
}

