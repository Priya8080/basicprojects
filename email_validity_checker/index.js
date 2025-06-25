window.onload = function(){
    document.getElementById("inEmail").addEventListener("input",function(){
        const email = this.value;
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            document.getElementById("result").innerText="Valid";
            document.getElementById("inEmail").style.border = "3px solid green";
        }
        else{
            document.getElementById("result").innerText="Invalid";
            document.getElementById("inEmail").style.border = "3px solid red";
        }
    });
};