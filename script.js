function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 100*i)
    });
    
}

const titulo = document.querySelector('.desktopH1');
typeWrite(titulo)

const spanWeb = document.querySelector('#spanWeb');
typeWrite(spanWeb)

const spanCi = document.querySelector('#spanCi');
typeWrite(spanCi)

/* Animacão*/

const target = document.querySelectorAll('[data-anime]');

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        }  
    })
}

function showMenu(){
    const windowTop = window.pageYOffset
        if((windowTop) > 0){
            document.querySelector(".menu").classList.add("animateMenuShow")
        }else{
            document.querySelector(".menu").classList.remove("animateMenuShow")
        }  
}

window.addEventListener('scroll', function(){
    animeScroll();
    showMenu();
})

