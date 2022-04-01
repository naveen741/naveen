document.addEventListener("DOMContentLoaded",()=>{
    const recentImageDataUrl=localStorage.getItem("presentimage");
    if(recentImageDataUrl)
    {
    document.querySelector("#images").setAttribute("src",recentImageDataUrl);
    }
    });
    let newObject = window.localStorage.getItem("myObject");
    var obj=JSON.parse(newObject); 
    for (var key in obj) { 
    if (obj.hasOwnProperty(key)) {
    var tag = document.createElement("p");
    tag.setAttribute("class","myPara") ;
      var text = document.createTextNode(key + " -> " + obj[key]); 
      tag.appendChild(text); 
      var element = document.getElementById("answer");
      element.appendChild(tag);
    }
    }