// calculates any expression given
// let res=eval(5+5*6)
// console.log(res);


let display=document.getElementById("display")
let clr=document.querySelector(".clear")
let button=document.querySelectorAll(".button")

button.forEach(button=>{
 button.addEventListener("click",()=>{
    let txt=btn.innerText
    console.log("txt");
    if(txt=="C"){
        inp.value=""
    }else if(txt==="="){
        inp.value=eval(inp.value)
    }else{
         inp.value= inp.value+txt
    }
 })
}