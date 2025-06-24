document.getElementById("textB").addEventListener("input",charCount);
function charCount(){
    let text = document.getElementById("textB").value;
    let charC = text.length;
    document.getElementById("result").innerHTML=`<strong>Characters:</strong>${charC}`;
    if(charC>=100){
        document.getElementById("warning").innerText="Limit Reached!!";
        document.getElementById("textB");
    }
    else{
        document.getElementById("warning").innerText="";
        document.getElementById("textB");    
    }
}