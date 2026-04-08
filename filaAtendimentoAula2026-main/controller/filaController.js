
const minhaFila = new Fila(5);

function adicionarElemento() {
  const nomeInput = document.getElementById("txtnovoNome");
  const cpfInput = document.getElementById("txtCpf");
  const data = obterDataAtual();  
  const hora = obterHoraAtual();  

  const nome = nomeInput.value;
  const cpf = cpfInput.value;

  const atendimento = new Atendimento(nome, cpf, data, hora);

  if (minhaFila.enqueue(atendimento)) {
    mostrarFila();
    nomeInput.value = "";
    cpfInput.value = "";
    nomeInput.focus();
  } else {
    alert("Fila cheia!");
  }
}

  function mostrarFila() {
  const filaElemento = document.getElementById("listFila");
  filaElemento.innerHTML = "";

  for (let item of minhaFila) {
    const listItem = document.createElement("li");
    listItem.textContent = item.toString(); 
    filaElemento.appendChild(listItem);
  }
}

    function removerElemento() {
  let removido = minhaFila.dequeue();

  if (removido === null)
    alert("Fila vazia");
  else {
    localStorage.setItem("ultimoAtendido", removido.toString());

    alert("Atendido: " + removido.toString());
    mostrarFila();
  }
}

  function buscarElemento() {
  const buscaCpf = document.getElementById("txtCpf").value;
  let encontrado = false;

  for (let item of minhaFila) {
    if (item.cpf === buscaCpf) { 
      alert("Encontrado na fila");
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert("Pessoa não está na fila");
  }
}





