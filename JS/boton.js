document.getElementById("boton").addEventListener("click",scrollUp);

function scrollUp (){
    var currentScroll = document.documentElement.scrollTop;//nos va a llamar el documento
    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp); //requestAnimation prepara para que tenga la animacion
        window.scrollTo(0,currentScroll - (currentScroll/10) );       
    }
}
//para que aparezca el boton
buttonUp=document.getElementById("boton"); // se guardo el boton en la variable buttonUP
window.onscroll=function(){ //para que detecte cuando se hace scroll y desaparezca
    var scroll=document.documentElement.scrollTop;
    if(scroll > 50){
        buttonUp.style.transform="scale(1)"
    }else if(scroll <25 ){
        buttonUp.style.transform="scale(0)"
    }
}