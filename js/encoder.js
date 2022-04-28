var botonCodificador = document.getElementById('encoder');

function encoder() {
    var texto = document.querySelector("#text-input").value;
    console.log('texto capturado => ' + texto);
    var textCodificado = "";

    var verificarNumeros = /\d/;
    var verificarMayusculas = /[A-Z]/;
    var verificarEspeciales = /á|é|í|ó|ú|ñ/i;

    if(!verificarNumeros.test(texto) &&
    !verificarMayusculas.test(texto) &&
    !verificarEspeciales.test(texto)) {
        for(var i = 0; i < texto.length; i++){
            console.log(texto[i]);
            if(texto[i] == 'a') {
                textCodificado += 'ai'
            } else if(texto[i] == 'e') {
                textCodificado += 'enter'
            } else if(texto[i] == 'i') {
                textCodificado += 'imes'
            } else if(texto[i] == 'o') {
                textCodificado += 'ober'
            } else if(texto[i] == 'u') {
                textCodificado += 'ufat'
            } else {
                textCodificado += texto[i];
            }
        }
        document.getElementById("coded-message").innerText = textCodificado;
        document.getElementById('text-input').value = "";
        document.getElementById("error-message").innerText = "";
    } else {
        document.getElementById("error-message").innerText = "Caracteres " + 
        "inválidos, ingrese solo letras en minúscula sin acentos."    
    }
}

botonCodificador.addEventListener('click', encoder);