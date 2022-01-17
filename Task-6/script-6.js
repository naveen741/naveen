var myTabs = document.querySelectorAll(".collapseTab");
for (let i = 0; i < myTabs.length; i++) {
myTabs[i].addEventListener("click", function() {
    var cont = this.nextElementSibling;
    if (cont.style.maxHeight){
    cont.style.maxHeight = null;
    }
    else {
    cont.style.maxHeight = cont.scrollHeight + "px";
    } 
    this.classList.toggle("active");
});
}
