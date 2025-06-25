window.onload = function(){
    const inputP = document.getElementById("inPassword");
    const visibility = document.getElementById("toggleB");
    visibility.addEventListener("click", function () {
    if (inputP.type === "password") {
      inputP.type = "text";
      visibility.innerText = "Hide";
    } else {
             inputP.type = "password";
             visibility.innerText = "Show";
    }
  });
};