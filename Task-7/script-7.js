function searchFun(){
    var key=document.querySelector("#searchBox").value.toUpperCase();
    var myItems=document.querySelectorAll(".items");
    for(let i=0;i<myItems.length;i++){
      var inItems=myItems[i].querySelector("a").innerText.toUpperCase();
      if(inItems.indexOf(key)>-1){
        myItems[i].style.display=""
      }
      else{
        myItems[i].style.display="none"
      }
    }
  }