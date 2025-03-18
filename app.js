let amigos =[];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;


    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }


    amigos.push(nombreAmigo);
   
    inputAmigo.value ="";
    inputAmigo.focus ();
    limpiarLista();

}

function limpiarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML ="";

    for(let i = 0; i < amigos.length; i++){
        let lista = document.createElement("li");
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);

    }

}

function sortearAmigo(){
    if( amigos.length === 0){
        alert("ingresa al menos un nombre");
        return;
    }
    
    let sortearAmigo = Math.floor( Math.random() * amigos.length);
    let amigoSorteado = amigos[sortearAmigo];
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es : ${amigoSorteado}`;
}