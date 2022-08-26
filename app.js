const numberEl = document.getElementById("number");
const buttons = document.querySelectorAll(".button");
let count=0;

//function which will run on clicking any of the button with class button
buttons.forEach(function (button) {

    //function ke andar e event ki full information deta hai aur iska hi use krke hm baaki data ko manipulate krte hain
    button.addEventListener("click", function (e) {

        //current target tells which element are you currently holding and classlist tells all the classes that the element contains
       const classList=e.currentTarget.classList;
       if (classList.contains("decrease")) {
        count--;
       }
       else if (classList.contains("reset")) {
        count=0;
       }
       else{
        count++;
       }
       if (count<0) {
        numberEl.style.color="red";
       }else if (count>0) {
        numberEl.style.color="#71F393";
       }else{
        numberEl.style.color="white";
       }
       numberEl.textContent=count;
    })
})