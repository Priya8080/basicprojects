function convert(){
    let length = parseFloat(document.getElementById("inputB").value);
    let unit = document.getElementById("selectB").value;
    let result;
    let output;

    if(unit === "MtoKm"){
        result = length/1000;
        output = "Kilometer";
    }
    else{
        result = length*1000;
        output = "Meter";
    }
    document.getElementById("result").innerHTML = "<strong>Result : </strong>" + result.toFixed(2) +" "+output;
}