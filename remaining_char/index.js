let maxLimit = 100;
document.getElementById("inputMessage").addEventListener("input",function(){
    let text = this.value;
    let remaining = maxLimit - text.length;
    if(remaining>=0){
        document.getElementById("result").innerText= `remaining char: ${remaining}`;
        document.getElementById("inputMessage");
    }
    else{
        document.getElementById("result").innerText = `Limit exceed :${-remaining}`;
        document.getElementById("inputMessage");

    }

})