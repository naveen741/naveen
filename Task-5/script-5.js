const images=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"]
const Mynext=document.getElementById("next");
const Myprevious=document.getElementById("prev");
let i=0;
const myNav=document.querySelectorAll(".navi");
myNav[0].setAttribute("style","background-color: #f0f8ff;");
Mynext.addEventListener('click',function(){
    i++;
    if(i>images.length-1){i=0;}
    change(i);
});
Myprevious.addEventListener('click',function(){
    i--;
    if(i<0){i=images.length-1;}
    change(i);
});
function change(y){
    i=y;
    const MyImage=document.getElementById("images");
    const myNav=document.querySelectorAll(".navi");
    MyImage.setAttribute('src',`./images/${images[y]}`);
    for(let x=0;x<myNav.length;x++){
        if(y==x){
            myNav[x].setAttribute("style","background-color: #f0f8ff;");
        }
        else{
            myNav[x].setAttribute("style","background-color: #000;");
        }
    }
}
