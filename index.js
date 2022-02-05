var icon = document.getElementById("icon");
var list = document.getElementById("navlist");
console.log(list);
icon.addEventListener("click",function(){   
    console.log(list);
    list.classList.toggle('show');
})