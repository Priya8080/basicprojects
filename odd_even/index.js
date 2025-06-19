function check(){
    let num = parseInt(document.getElementById("inputNumber").value);
    if(num % 2 === 0){
        document.getElementById("result").innerText = "Even Number";
    }else {
        document.getElementById("result").innerText = "Odd Number"
    }
}