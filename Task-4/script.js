var myForm=document.querySelector("#form-1");
        var myTbody=document.querySelector("tbody");
        var obj=[];
        var x=0,n=0,flag=0;
        myForm.addEventListener("submit", function(evt){
            evt.preventDefault();
            objArr(x,8);
            clrForm();
            x++;
            
        });
        function edit(ans){
            document.getElementById("name").value=obj[ans].Name;
            document.getElementById("dob").value=obj[ans].DOB;
            if(obj[ans].Gender=="male"){
                document.getElementById("male").checked=true;
            }
            else{
                document.getElementById("female").checked=true;
            }
            document.getElementById("nation").value=obj[ans].Nationality;
            document.getElementById("number").value=obj[ans].Phonenumber;
            var myAdd=document.getElementById("address").value=obj[ans].address;
            if(obj[ans].checkValue[0]){
                document.getElementById("fullStack").checked=true;
            }
            if(obj[ans].checkValue[1]){
                document.getElementById("android").checked=true;
            }
            if(obj[ans].checkValue[2]){
                document.getElementById("AI").checked=true;
            }
                
            var myBtn=document.querySelector(".btn");
            if(flag==0){
                var mySub=document.getElementById("sub");
                var upBtn=document.createElement("button");
                upBtn.setAttribute(`id`,`update`);
                upBtn.setAttribute(`onclick`,`insert(event,${ans});`);
                upBtn.innerText="update";
                myBtn.replaceChild(upBtn,mySub);
                flag=1;
            }
            
        }
        function insert(event,ans){
            event.preventDefault();
            console.log(ans);
            objArr(ans,7);
            clrForm();
        }
        function del(ans){
            alert(`Are you sure?? you are deleting a row`)
            var allDetails=myTbody.querySelectorAll(".details");
            allDetails[ans].innerHTML="";
            clrForm();
           
        }
        function objArr(ans,n){
            const myName=document.getElementById("name");
            const myDOB=document.getElementById("dob");
            const male=document.getElementById("male");
            const female=document.getElementById("female");
            const myNation=document.getElementById("nation");
            const myNum=document.getElementById("number");
            const myAdd=document.getElementById("address");
            let myGen,myInterest=[],i=0,check=[];
            if(male.checked){
                myGen=male.value;
            }
            else if(female.checked){
                myGen=female.value;
            }
            check[0]=document.getElementById("fullStack").checked;
            check[1]=document.getElementById("android").checked;
            check[2]=document.getElementById("AI").checked;
            if(document.getElementById("fullStack").checked){
                myInterest[i++]=`${document.getElementById("fullStack").value} `;
            }
            if(document.getElementById("android").checked){
                myInterest[i++]=`${document.getElementById("android").value} `;
            }
            if(document.getElementById("AI").checked){
                myInterest[i++]=`${document.getElementById("AI").value} `;
            }
            var temp=[];
            temp["Name"]=myName.value;
            temp["DOB"]=myDOB.value;
            temp["Gender"]=myGen;
            temp["Nationality"]=myNation.value;
            temp["Phonenumber"]=myNum.value;
            temp["address"]=myAdd.value;
            temp["Interest"]=myInterest;
            temp["checkValue"]=check;
            obj[ans]=temp;
            var myTr=document.createElement("tr");
            myTr.setAttribute("class","details");
            var newDetail=[];
            for(let i=0;i<n;i++){
                newDetail[i]=document.createElement("td");
            }
            newDetail[0].innerText=obj[ans].Name;
            newDetail[1].innerText=obj[ans].DOB;
            newDetail[2].innerText=obj[ans].Gender;
            newDetail[3].innerText=obj[ans].Nationality;
            newDetail[4].innerText=obj[ans].Phonenumber;
            newDetail[5].innerText=obj[ans].address;
            newDetail[6].innerText=obj[ans].Interest;
            if(n==8){
                var edBtn=document.createElement("button");
                var delBtn=document.createElement("button");
                edBtn.innerText="edit";
                delBtn.innerText="del";
                edBtn.setAttribute("class","edits");
                delBtn.setAttribute("class","deletes");
                edBtn.setAttribute("onclick",`edit(${x})`);
                delBtn.setAttribute("onclick",`del(${x})`);
                newDetail[7].appendChild(edBtn);
                newDetail[7].appendChild(delBtn);
                for(let i=0;i<8;i++){
                    myTr.appendChild(newDetail[i]);
                }
                myTbody.appendChild(myTr);
            }
            else{
                var removeTr=document.querySelectorAll(".details")[ans]
                var removeTd=removeTr.querySelectorAll("td");
                for(let i=0;i<7;i++){
                    removeTr.replaceChild(newDetail[i],removeTd[i]);
                }
                var myBtn=document.querySelector(".btn");
                if(flag==1){
                    var myUp=document.getElementById("update");
                    var subBtn=document.createElement("button");
                    subBtn.setAttribute("id","sub");
                    subBtn.innerText="Submit";
                    myBtn.replaceChild(subBtn,myUp);
                    flag=0;
                }
            }
        }
        function clrForm(){
            document.getElementById("name").value="";
            document.getElementById("dob").value="";
            document.getElementById("nation").value="";
            document.getElementById("number").value="";
            document.getElementById("address").value="";
            document.getElementById("male").checked=false;
            document.getElementById("female").checked=false;
            document.getElementById("fullStack").checked=false;
            document.getElementById("android").checked=false;
            document.getElementById("AI").checked=false;
        }
