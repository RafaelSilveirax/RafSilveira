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