
const botonE = document.getElementById("butE");
const botonD = document.getElementById("butD");
const botonC = document.getElementById("butC");
let texFin = document.getElementById("textofinal");
let texFinH4 = document.getElementById("texFinH4");
let texFinP = document.getElementById("texFinP")
let imgTexFinal = document.getElementById("imgTexFinal");
let texInicio = document.getElementById("texInicio")
botonC.style.display = "none";

botonE.addEventListener("click", function() {

  if (texInicio.value !== ""){
    
    
    imgTexFinal.style.display = "none"; //style.display es una propiedad de JavaScript
    texFinH4.style.display = "none"; //que controla la visibilidad de un elemento HTML.
    texFinP.style.display = "none"; // si el valor es none el elenento se elimina 
    texFin.style.display = "block" // si el valor es block el elemento se muestra este valor es el balor predeterminado
    botonC.style.display = "block";
    texInicio.value = '' // elimina el texto de input
    
  
  }
});

botonD.addEventListener("click", function() {
  
  imgTexFinal.style.display = "none"; //style.display es una propiedad de JavaScript
  texFinH4.style.display = "none"; //que controla la visibilidad de un elemento HTML.
  texFinP.style.display = "none"; // si el valor es none el elenento se elimina 
  texFin.style.display = "block" // si el valor es block el elemento se muestra este valor es el balor predeterminado
  botonC.style.display = "block";
  texInicio.value = '' // elimina el texto de input
  
});

//copia texto
botonC.addEventListener("click", function() {
  //navigator.clipboard.writeText() se utilisa para comopiar 
  navigator.clipboard.writeText(texFin.textContent);//texFin es el ID del elemento HTML que se va a copiar.
 //textContent se utiliza para obtener el contenido de texto del elemento HTML.
  imgTexFinal.style.display = "block";
  texFinH4.style.display = "block";
  texFinP.style.display = "block";
  texFin.style.display = "none" ;
  botonC.style.display = "none";
});


//este codigo tomo el texto del usuaro y lo modifican
function inpTexE() { // la funsion esta en el botos para cuando se presione se ejecute el codigo
    let textod = document.getElementById('texInicio').value;// qui tomo el texto del usuario

    let e = textod.replace(/e/g, 'enter');//aqui el texto del usuario se modifica 
    let i = e.replace(/i/g, "imes");//La “g” es un modificador que se utiliza para hacer una búsqueda global en lugar de una búsqueda única
    let a = i.replace(/a/g, "ai");// en pocas palagas busca en la palaba los carateres iguales para modificarlas
    let o = a.replace(/o/g, "ober");
    let u = o.replace(/u/g, "ufat");
  
    let elemento = document.getElementById('textofinal'); //qui se escribe el resutado del texto modificado
    elemento.textContent = u;
}


inpTexE();

    
 
function inpTexD() {
    let textod = document.getElementById('texInicio').value;
    document.querySelector('#texInicio').value = '';
    let enter = textod.replace(/enter/g, "e");
    let imes = enter.replace(/imes/g, "i");
    let ai = imes.replace(/ai/g, "a");
    let ober = ai.replace(/ober/g, "o");
    let ufat = ober.replace(/ufat/g, "u")

    let hola = document.getElementById('textofinal');
    hola.textContent = ufat;
   
  }

  inpTexD();

  
