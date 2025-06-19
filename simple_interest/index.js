function calculateSI(){
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if(isNaN(p) || isNaN(r) || isNaN(t)){
        document.getElementById("result").innerText="Bhaii sara box ka value put kro!!";
       return;
    }
     
   let SI = (p*r*t)/100;
   let total = p+SI;
   document.getElementById("result").innerHTML=`
   <strong>Simple Interest :</strong> Rs. ${SI}
   <br><br>
   <strong>Total Amount :</strong> Rs. ${total}
   `;
}