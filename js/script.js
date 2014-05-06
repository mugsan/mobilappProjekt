

var answer = Math.floor((Math.random() * 100) + 1);
var tries = 0;

writeHighscore();

function Entry(name, score){  
    this.name = name;
    this.score = score;
}

function guess(){
    
    tries += 1;
    
    var val = document.getElementById("inputBox").value;
    
    if(val > answer){
        
        var highest = parseInt(document.getElementById("higherNumber").innerHTML);
        
        console.log(highest);
        
        if(val < highest) document.getElementById("higherNumber").innerHTML = val;
        
    }

    else if(val < answer){
        console.log("hej");
        
     
         var lowest = parseInt(document.getElementById("lowerNumber").innerHTML);
        
         if(val > lowest) 
             document.getElementById("lowerNumber").innerHTML = val;
    }
    
    else {
        
        alert("CO-CO-CO-CORRECT!!!!\n");   
        
        var highscore = new Array(); 
        highscore[0] = JSON.parse(localStorage.getItem("pos1"));
        highscore[1] = JSON.parse(localStorage.getItem("pos2"));
        highscore[2] = JSON.parse(localStorage.getItem("pos3"));
        highscore[3] = JSON.parse(localStorage.getItem("pos4"));
        highscore[4] = JSON.parse(localStorage.getItem("pos5"));
        
        var i = highscore.size - 1;
        
        while(i >= 0 && tries < highscore[i].score){
            i--;
        }
        
        //not a highscore!
        if(i == highscore.size -1) return;
        
        
        
        prompt("Enter name: ", name);
        
        var newEntry = new Entry(name, tries);
        
        highscore.splice(i, 0, newEntry);
        
        if(highscore.length > 5) highscore.pop();
        
        
        saveLocalStorage(highscore);
            
    }
    
    
}



function saveLocalStorage(highscore){
    
    localStorage.setItem("pos1", JSON.stringify(highscore[0]));
    localStorage.setItem("pos2", JSON.stringify(highscore[1]));
    localStorage.setItem("pos3", JSON.stringify(highscore[2]));
    localStorage.setItem("pos4", JSON.stringify(highscore[3]));
    localStorage.setItem("pos5", JSON.stringify(highscore[4]));
    
    writeHighscore();
    
   
}

function writeHighscore(){
    
    document.getElementById("pos1").innerHTML = localStorage.getItem("pos1");
    document.getElementById("pos2").innerHTML = localStorage.getItem("pos2");
    document.getElementById("pos3").innerHTML = localStorage.getItem("pos3");
    document.getElementById("pos4").innerHTML = localStorage.getItem("pos4");
    document.getElementById("pos5").innerHTML = localStorage.getItem("pos5");
    
}