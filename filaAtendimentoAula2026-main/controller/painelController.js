function atualizarUltimoAtendimento() {
  
  const ultimo = localStorage.getItem("ultimoAtendido");

  const elemento = document.getElementById("ultimoAtendimento");

  if (ultimo) {
    elemento.textContent = ultimo;
  } else {
    elemento.textContent = "Aguardando...";
  }
}

atualizarUltimoAtendimento();

setInterval(atualizarUltimoAtendimento, 1000);