const person = ["Priya","Khushi","Sakshi","Manish","Yash","Archana","Ayushi","Kajal"];
const box = document.getElementById("search");
const nameList = document.getElementById("namelist");

function display(filtered){
    nameList.innerHTML="";
    filtered.forEach(function(name){
         const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
        });
}

display(person);
box.addEventListener("input", function () {
  const keyword = box.value.toLowerCase(); 
  const filtered = person.filter(function(name) {
    return name.toLowerCase().includes(keyword);
  });
  display(filtered); 
 });
