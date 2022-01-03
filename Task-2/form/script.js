
    var myForm=document.getElementById("form-1");
    var i=0;
    myForm.addEventListener("submit",function(evt){
        evt.preventDefault();
        var myName=document.getElementById("name").value;
        var myLName=document.getElementById("l-name").value;
        var myDOB=document.getElementById("dob").value;
        var myNation=document.getElementById("nation").value;
        var myNum=document.getElementById("number").value;
        var myAdd=document.getElementById("address").value;
        var myCon=document.getElementsByClassName("subContainer");
        var myContent=document.createElement("div");
        var name=document.createElement("h2")
        var lname=document.createElement("h2")
        var DOB=document.createElement("h2")
        var nation=document.createElement("h2")
        var num=document.createElement("h2")
        var add=document.createElement("h2")
        var myDiv=myCon[i].getElementsByTagName("div");
        name.innerText=`First Name : ${myName}`;
        myContent.appendChild(name);
        
        lname.innerText=`Last Name : ${myLName}`;
        myContent.appendChild(lname);
        
        DOB.innerText=`DOB : ${myDOB}`;
        myContent.appendChild(DOB);
        
        nation.innerText=`Nationality : ${myNation}`;
        myContent.appendChild(nation);
        
        num.innerText=`Mobile Number : ${myNum}`;
        myContent.appendChild(num);
        
        add.innerText=`Address : ${myAdd}`;
        myContent.appendChild(add);

        myCon[i].replaceChild(myContent,myDiv[0]);
        //myCon[i].appendChild(myContent);
        document.getElementById("name").value="";
        document.getElementById("l-name").value="";
        document.getElementById("dob").value="";
        document.getElementById("nation").value="";
        document.getElementById("number").value="";
        document.getElementById("address").value="";
        if(i==0){            
            i=2;
        }
        else{
            i=0;
        }
    });
