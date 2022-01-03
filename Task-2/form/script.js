
    const myForm=document.getElementById("form-1");
    let i=0;
    myForm.addEventListener("submit",function(evt){
        evt.preventDefault();
        const myName=document.getElementById("name").value;
        const myLName=document.getElementById("l-name").value;
        const myDOB=document.getElementById("dob").value;
        const myNation=document.getElementById("nation").value;
        const myNum=document.getElementById("number").value;
        const myAdd=document.getElementById("address").value;
        const myCon=document.getElementsByClassName("subContainer");
        const myContent=document.createElement("div");
        const name=document.createElement("h2")
        const lname=document.createElement("h2")
        const DOB=document.createElement("h2")
        const nation=document.createElement("h2")
        const num=document.createElement("h2")
        const add=document.createElement("h2")
        const myDiv=myCon[i].getElementsByTagName("div");
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
