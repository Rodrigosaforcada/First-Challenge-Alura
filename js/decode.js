var botonDecodificador = document.getElementById('decoded');

function decoded() {
    var texto = document.querySelector("#coded-message").textContent;
    console.log(texto);
    console.log('texto a decodificar => ' + texto);
    var textCodificado = "";
    for(var i = 0; i < texto.length; i++){
        console.log(texto[i]);
        if(texto[i] == 'a') {
            textCodificado += "a";
            i += 1
        } else if(texto[i] == 'e') {
            textCodificado += "e";
            i += 4
        } else if(texto[i] == 'i') {
            textCodificado += "i";
            i += 3
        } else if(texto[i] == 'o') {
            textCodificado += "o";
            i += 3
        } else if(texto[i] == 'u') {
            textCodificado += "u";
            i += 3
        } else {
            textCodificado += texto[i];
        }
    }
    document.getElementById("text-input").value = textCodificado;
    document.getElementById('coded-message').textContent = "";
}

botonDecodificador.addEventListener('click', decoded);