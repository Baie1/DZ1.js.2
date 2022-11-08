const INNinput = document.querySelector("#INNinput")
const INNCheck = document.querySelector(".INNCheck")
const INNResult = document.querySelector(".INNResult")



const INNRegExp = /^01\g{13}$/;


INNCheck.addEventListener("click",() => {
    console.log(INNinput.value );
    if (INNRegExp.test(INNinput.value )) {  
        INNResult.innerText ="ok"
        INNResult.style.color = "green"  
    } else { 
        INNResult.innerText ="not ok"
        INNResult.style.color = "red"     
    }
});
let num = 0;
 
const count = () => {
    num++;
    console.log (num);
    if (num > 500){
        count();
    }    
};
count();

const people = {
     
}