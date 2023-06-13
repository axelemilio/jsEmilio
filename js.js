//let emilio = 20, tiburcio = 15;
//alert(emilio+=10);
//if (emilio <= tiburcio) {
  //  alert("ESTO ES REAL HIJO DE PERRA");
//} else {
  //  alert("no se cumple, tiburcio mayor que emilio");
//}

//let emi = document.createElement("h1");
//let con = document.createTextNode("AQUI ");
//emi.appendChild(con);
//let pantalla = document.getElementById("div2");
//pantalla.appendChild(emi);



function sum(){
    
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    if (num2 == "" || num1 == ""){
        alert("inserta algun numero");
    }else {
 let suma = parseFloat(num1) + parseFloat(num2);
      document.getElementById("label1").innerHTML = "Esta suma es igual a: " + suma; }
}
let plus = document.getElementById("suma").onclick=sum;
function res(){

    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    if (num2 == "" || num1 == ""){
      alert("inserta algun numero");
  }else {
 let suma = parseFloat(num1) - parseFloat(num2);
      document.getElementById("label1").innerHTML = "Esta resta es igual a: " + suma;}
}
let rest = document.getElementById("resta").onclick=res;
function mul(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    if (num2 == "" || num1 == ""){
      alert("inserta algun numero");
  }else {
 let suma = parseFloat(num1) * parseFloat(num2);
      document.getElementById("label1").innerHTML = "Esta multiplicacion es igual a: " + suma;}
}
let multip = document.getElementById("multi").onclick=mul;
function divi(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    if (num2 == "" || num1 == ""){
      alert("inserta algun numero");
  }else {
 let suma = parseFloat(num1) / parseFloat(num2);
    
      document.getElementById("label1").innerHTML = "Esta divicion es igual a: " + suma;}
}
let divic = document.getElementById("divici").onclick=divi;
function pot(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    if (num2 == "" || num1 == ""){
      alert("inserta algun numero");
  }else {
 let suma = parseFloat(num1) ** parseFloat(num2);
    
     document.getElementById("label1").innerHTML = "El resultado de esta expotenciacion es igual a: " + suma;}
}
let pote = document.getElementById("potenc").onclick=pot;
//raiz cuadrada
function raiz(){
    let num1 = document.getElementById("numero1").value;
    let suma = parseFloat(num1) ** (1/2);
    if ( num1 == ""){
      alert("inserta algun numero");
  }else {
      document.getElementById("label1").innerHTML = "La raiz cuadradade  " + num1 + " es " + suma;}
}

let rai = document.getElementById("raiz").onclick=raiz;

function crear(){
  let textoo = document.getElementById("textito");
  let h1 = document.createElement("li"), con = document.createTextNode(textoo.value);
  h1.appendChild(con);
  document.body.appendChild(h1);
  let nomb = document.getElementById("nombre");
  let nombre = document.createElement("i"), cont = document.createTextNode(nomb.value);
  nombre.appendChild(cont);
  document.body.appendChild(nombre);
  textoo.value = "";
}


let crearr = document.getElementById("crea").onclick=crear;

/*let balance, withdraw;

balance = 416500;
withdraw = 160000;



console.log(balance-=withdraw);*/

























 