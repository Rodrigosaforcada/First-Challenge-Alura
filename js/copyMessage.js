var copyButton = document.getElementById('copy-message');

function copyMessage() {
  let copyText = document.querySelector("#text-input");
  copyText.select();
  document.execCommand("copy");
}
  
copyButton.addEventListener('click', copyMessage);