const lab = document.querySelector("#padding4");
const pass1 = "1234"
function toGetLaboratory(){
 
    const inputString = prompt("Enter password.");
    if (inputString != pass1){
        alert("Password was wrong.");
        location.href ="index.html";
    }else{
        alert("Welcome Halam.");
        location.href ="4.html";


     
    }
}
lab.addEventListener("click", toGetLaboratory);