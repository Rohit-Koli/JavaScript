let button=document.querySelector("#btn-change");

button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="Button was clicked";
})

let reload=document.querySelector("#btn-reload");

reload.addEventListener("click",()=>{
    location.reload();
})

let addDivTop=document.querySelector("#btn-addDivTop");

addDivTop.addEventListener("click",()=>{
    let newDiv=document.createElement("div");
newDiv.setAttribute("class","newDiv");
newDiv.innerHTML="This is new Div element";

document.querySelector(".container").append(newDiv);
})
