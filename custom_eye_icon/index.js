window.onload = function(){
    const inputP = document.getElementById("inPassword");
    const toggleE = document.getElementById("toggleEye");
    toggleE.addEventListener("click",function(){
        if(inputP.type === "password"){
            inputP.type = "text";
        toggleE.textContent = "🙈";
        }
        else{
            inputP.type = "password";
        toggleE.textContent = "👁️";
        }

    });
};