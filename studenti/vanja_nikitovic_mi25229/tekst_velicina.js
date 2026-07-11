const plusBtn=document.getElementById("size_button_plus");
const minusBtn=document.getElementById("size_button_minus");
const content=document.getElementById("content");


let currentSize=17;

plusBtn.onclick=function(){
    currentSize++;
    content.style.fontSize=currentSize +"px";
}

minusBtn.onclick=function(){
    currentSize--;
    content.style.fontSize=currentSize +"px";
}

