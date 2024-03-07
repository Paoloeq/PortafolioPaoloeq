document.getElementById("id__enlacemenu--1").addEventListener("click",ocultarMenu,false);
document.getElementById("id__enlacemenu--2").addEventListener("click",ocultarMenu,false);
document.getElementById("id__enlacemenu--3").addEventListener("click",ocultarMenu,false);
var iconomenu = document.getElementById("id--nav__label");
iconomenu.addEventListener("click",pintarmenu,false);

function ocultarMenu(){
    document.getElementById("menu").checked = false;
    iconomenu.setAttribute("style","background-color:none;");
}

function pintarmenu(){
    if(document.getElementById("menu").checked==false){
        iconomenu.setAttribute("style","background-color:#2d3135;");
    }else{
        iconomenu.setAttribute("style","background-color:none;");
    }
}




