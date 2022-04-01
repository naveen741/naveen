        var count=0;
        var myform= document.querySelector(".form-1");
        myform.addEventListener("submit",function(event){
            event.preventDefault();
            var myLi=document.createElement("li");
            myLi.setAttribute("class","list");
            myLi.setAttribute("value",count+1)
            myLi.setAttribute("onclick",`strike(${count})`);
            myLi.setAttribute("ondblclick",`unstrike(${count})`);
            myLi.innerText=document.getElementById("task").value;
            document.getElementById("Mylist").appendChild(myLi);
            document.getElementById("task").value="";
            count++;
        });
        function strike(val){
            var myList=document.querySelectorAll(".list");
            for(let i=0;i<myList.length;i++){
                if(myList[i].value==val+1){
                    myList[i].style="text-decoration: line-through";
                }
            }
        }
        function unstrike(val){
            var myList=document.querySelectorAll(".list");
            for(let i=0;i<myList.length;i++){
                if(myList[i].value==val+1){
                    myList[i].style="text-decoration: none";
                }
            }
        }
        var clearBtn=document.getElementById("clear");
        clearBtn.addEventListener("click",function(){
            var myList=document.querySelectorAll(".list");
            for(let i=0;i<myList.length;i++){
                if(myList[i].style["text-decoration"]=="line-through"){
                    document.getElementById("Mylist").removeChild(myList[i]);
                }
            }
        });
        var myEmp=document.querySelector("#empty");
        myEmp.addEventListener("click", function(){
            document.querySelector("#Mylist").innerHTML="";
        });
        var mySave=document.querySelector("#save");
        mySave.addEventListener("click",function(){
            var save=document.querySelector("#Mylist")
            localStorage.setItem("saveList",save.innerHTML);
        });
        var myShow=document.querySelector("#show");
        myShow.addEventListener("click",function(){
            var show=localStorage.getItem("saveList");
            document.querySelector("#Mylist").innerHTML=show;
        });