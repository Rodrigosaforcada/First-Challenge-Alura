let element = document.querySelector('#coded-result');
console.log(document.querySelector("#coded-result").textContent);

function copyMessageCoded() {
  var textoCodificado = document.querySelector("#coded-message").textContent;
  document.getElementById("text-input").value = textoCodificado;
  copyMessage();
  document.getElementById("coded-message").innerText = textoCodificado;
  document.getElementById('text-input').value = "";
}
  
document.getElementById('copy-coded-message').addEventListener('click', copyMessageCoded);