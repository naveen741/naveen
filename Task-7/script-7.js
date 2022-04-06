function searchFun(){
    var key=document.querySelector("#searchBox").value.toUpperCase();
    var myItems=document.querySelectorAll(".items");
    for(let i of myItems){
      var inItems=i.querySelector("a").innerText.toUpperCase();
      if(inItems.indexOf(key)>-1){
        i.style.display=""
      }
      else{
        i.style.display="none"
      }
    }
  }
