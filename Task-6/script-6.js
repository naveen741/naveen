var myTabs = document.querySelectorAll(".collapseTab");
for (let i of myTabs) {
i.addEventListener("click", function() {
    var cont = i.nextElementSibling;
    if (cont.style.maxHeight){
    cont.style.maxHeight = null;
    }
    else {
    cont.style.maxHeight = cont.scrollHeight + "px";
    } 
    i.classList.toggle("active");
});
}
