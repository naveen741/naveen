var myform=document.querySelector(".credentials");
myform.addEventListener("submit",function(evnt){
    var name=document.querySelector("#name").value;
    var num=document.querySelector("#moblieNo").value;
    var password=document.querySelector("#password").value;
    var repassword=document.querySelector("#re-password").value;
    if(password==repassword){
        var obj={
            Name:name,
            reg_number:num,
            Password: password
        };
        var myjson=JSON.stringify(obj);
        console.log(myjson);
        localStorage.setItem("details",myjson);
    }
    else{
        alert("password mismatch");
        evnt.preventDefault();
    }
});