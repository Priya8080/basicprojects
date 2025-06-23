function countWord(){
    const text = document.getElementById("wordBox").value;
    let word = text.trim().split(/\s+/);

    const wordCount = text.trim()===" " ? 0 : word.length;
    document.getElementById("result").innerHTML="<strong>Word : </strong>"+ wordCount;
    
}