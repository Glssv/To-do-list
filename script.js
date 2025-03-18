function adicionarTarefa() {
  let input = document.querySelector("input").value;

  let li = document.createElement("li");
  document.querySelector("ul").appendChild(li); // aqui falamos que o ul que ta no html vai receber o li como filho, e como n vamos pegar ele pra usar aq, vamos pegar apenas para falar onde o li vai ser adicionado, n precisa de let

  li.innerHTML = input + "<span class='deletar' onclick='deletarTarefa(this)'>🗑️</span>";

  document.querySelector("input").value = "";
}

function deletarTarefa(li){
  li.parentElement.remove()
}
