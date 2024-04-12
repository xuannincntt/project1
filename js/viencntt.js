var index;
function ham(index){
    var i;
    var x = document.getElementsByClassName("tt");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[index].style.display = "grid";

    var btnContainer = document.getElementById("tieude");
    var btns = btnContainer.getElementsByClassName("tieude");
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(" active", "");
    }
    btns[index].className += " active";
}
ham(index = 0);