



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
  
inpTexE()

 
function inpTexD() {
    let textod = document.getElementById('texInicio').value;
    let enter = textod.replace(/enter/g, "e");
    let imes = enter.replace(/imes/g, "i");
    let ai = imes.replace(/ai/g, "a");
    let ober = ai.replace(/ober/g, "o");
    let ufat = ober.replace(/ufat/g, "u")

    let hola = document.getElementById('textofinal');
    hola.textContent = ufat;
  }
  inpTexD()
