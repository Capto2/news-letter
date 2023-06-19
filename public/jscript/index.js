const display = document.querySelector(".display");
const success = document.querySelector(".success");
const useremail = document.querySelector("#email").value;
const button = document.querySelector(".btn");

function myFunct(){
    display.classList.add("hide");
    display.style.display = "none";
    document.querySelector(".bold").innerHTML = useremail;
    success.classList.remove("hide");
}

button.addEventListener("click", function(){
    myFunct();
});
