

var answer;
var tries;
init();

function Entry(name, score){  
    this.name = name;
    this.score = score;
}

function init(){
    document.getElementById("higherNumber").innerHTML = 100;
    document.getElementById("lowerNumber").innerHTML = 0;
    answer = Math.floor((Math.random() * 100) + 1);
    tries = 0;
    writeHighscore();
}

function guess(){
      
    console.log(tries);
    tries += 1;
    
    console.log(tries);
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
        
        var i = highscore.length - 1;
        console.log(tries);
        
        console.log("size of array is:" + i);
        console.log(parseInt(highscore[i].score));
        while(i >= 0 && tries < parseInt(highscore[i].score)){
            console.log("one loop");
            i--;
        }
        
        //not a highscore!
        if(i == highscore.length -1) return;
        
        
        
        var name = prompt("Enter name: ");
        
        var newEntry = new Entry(name, tries);
       
        console.log("index to insert at:" + i);
        highscore.splice(i+1, 0, newEntry);
        
        if(highscore.length > 5) highscore.pop();
        
        
        saveLocalStorage(highscore);
            
    }
    
    
}



function saveLocalStorage(highscore){
    
    localStorage.setItem("bool","true");
    localStorage.setItem("pos1", JSON.stringify(highscore[0]));
    localStorage.setItem("pos2", JSON.stringify(highscore[1]));
    localStorage.setItem("pos3", JSON.stringify(highscore[2]));
    localStorage.setItem("pos4", JSON.stringify(highscore[3]));
    localStorage.setItem("pos5", JSON.stringify(highscore[4]));
    
    writeHighscore();
    init();
   
}

function writeHighscore(){
    if (localStorage.getItem("bool") != "true") {
        reset();
    }
    document.getElementById("pos1").innerHTML = JSON.parse(localStorage.getItem("pos1")).score + " " +  JSON.parse(localStorage.getItem("pos1")).name;
    document.getElementById("pos2").innerHTML = JSON.parse(localStorage.getItem("pos2")).score + " " +  JSON.parse(localStorage.getItem("pos2")).name;
    document.getElementById("pos3").innerHTML = JSON.parse(localStorage.getItem("pos3")).score + " " +  JSON.parse(localStorage.getItem("pos3")).name;
    document.getElementById("pos4").innerHTML = JSON.parse(localStorage.getItem("pos4")).score + " " +  JSON.parse(localStorage.getItem("pos4")).name;
    document.getElementById("pos5").innerHTML = JSON.parse(localStorage.getItem("pos5")).score + " " +  JSON.parse(localStorage.getItem("pos5")).name;
}

function reset(){
    var mArray = new Array();
    for (var i = 0, len = 5; i < len; i++) {
        mArray[i] = new Entry("Palatine Kleeburg",9999);
    }
    saveLocalStorage(mArray);
}
