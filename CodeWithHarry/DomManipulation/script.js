let newDiv=document.createElement("div");
newDiv.setAttribute("class","newDiv");
newDiv.innerHTML="This div is inserted by JS";
// document.querySelector(".box").append(newDiv);  //Element is inserted at last       

// document.querySelector(".container").prepend(newDiv); //Element is Inserted at Top

// document.querySelector(".container").before(newDiv);

document.querySelector(".container").after(newDiv);