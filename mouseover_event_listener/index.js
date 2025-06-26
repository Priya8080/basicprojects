let input = document.getElementById("inputB");
input.addEventListener("mouseover",function(){
    const charC = input.value.length;
    document.getElementById("result").innerText=`Characters:${charC}`;
});
