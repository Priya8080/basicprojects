function counting(){
let text = document.getElementById("textArea").value;
let word = text.trim().split(/\s+/);
let wordCount = text.trim() === "" ? 0 : word.length;
let charCount = text.length;

document.getElementById("result").innerHTML = 
`<strong> Word Count : </strong> ${wordCount}
<br>
<strong>Character Count : </strong> ${charCount}`;
}
document.getElementById("textArea").addEventListener("input",counting);