
    const myForm=document.getElementById("form-1");
    let i=0;
    myForm.addEventListener("submit",function(evt){
        evt.preventDefault();
        const myName=document.getElementById("name");
        const myLName=document.getElementById("l-name");
        const myDOB=document.getElementById("dob");
        const male=document.getElementById("male");
        const female=document.getElementById("female");
        let gen;
        const myNation=document.getElementById("nation");
        const myNum=document.getElementById("number");
        const myAdd=document.getElementById("address");
        const myCon=document.getElementsByClassName("subContainer");
        const myContent=document.createElement("div");
        const name=document.createElement("h2")
        const lname=document.createElement("h2")
        const DOB=document.createElement("h2")
        const gender=document.createElement("h2")
        const nation=document.createElement("h2")
        const num=document.createElement("h2")
        const add=document.createElement("h2")
        const myDiv=myCon[i].getElementsByTagName("div");
        
        
        
        name.innerText=`First Name : ${myName.value}`;
        myContent.appendChild(name);
        
        lname.innerText=`Last Name : ${myLName.value}`;
        myContent.appendChild(lname);
        
        DOB.innerText=`DOB : ${myDOB.value}`;
        myContent.appendChild(DOB);
        if(male.checked){
            gen=male.value;
        }
        else if(female.checked){
            gen=female.value;
        }

        gender.innerText=`Gender : ${gen}`;
        myContent.appendChild(gender);

        nation.innerText=`Nationality : ${myNation.value}`;
        myContent.appendChild(nation);
        
        num.innerText=`Mobile Number : ${myNum.value}`;
        myContent.appendChild(num);
        
        add.innerText=`Address : ${myAdd.value}`;
        myContent.appendChild(add);

        myCon[i].replaceChild(myContent,myDiv[0]);
        //myCon[i].appendChild(myContent);
        myName.value="";
        myLName.value="";
        myDOB.value="";
        myNation.value="";
        myNum.value="";
        myAdd.value="";
        male.checked=false;
        female.checked=false;
        if(i==0){            
            i=2;
        }
        else{
            i=0;
        }
    });