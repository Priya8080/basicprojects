window.onload = function(){
document.getElementById("inpassword").addEventListener("input",function(){
    let password = this.value;
    let charC = password.length;
    if(charC<=6){
        document.getElementById("result").innerText = "Weak Password";
        document.getElementById("inpassword").style.backgroundColor = "red";
    }
    
    else if(/[a-zA-Z]/.test(password) && /\d/.test(password) && /[^a-zA-Z0-9]/.test(password) && charC>=8){
        document.getElementById("result").innerText = "Strong Password";
        document.getElementById("inpassword").style.backgroundColor = "green";
    }
  else if(/[a-zA-Z]/.test(password) && /\d/.test(password) && charC>=6){
        document.getElementById("result").innerText = "Medium Password";
        document.getElementById("inpassword").style.backgroundColor = "orange";
    }
    else{
        document.getElementById("result").innerText = "Weak Password";
        document.getElementById("inpassword").style.backgroundColor = "red";
    }
});
};