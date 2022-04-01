var myform=document.querySelector(".credentials");
        myform.addEventListener("submit",function(evnt){
            var mydata=localStorage.getItem("details");
            var name=document.querySelector("#name").value;
            var num=document.querySelector("#moblieNo").value;
            var password=document.querySelector("#password").value;
            var obj=JSON.parse(mydata);
            console.log(obj.Name);
            if(!(obj.Name==name&&obj.reg_number==num&&obj.Password==password)){
                evnt.preventDefault();
                alert("Check the credentials");
            }
        });