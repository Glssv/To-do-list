
let input = document.querySelector("input"); 

function adicionarTarefa() {
  let inputValor = input.value.trim(); 

  if (!inputValor) return; 

  let li = document.createElement("li");
  document.querySelector("ul").appendChild(li);

  li.innerHTML = `${inputValor} <span class='deletar' onclick='deletarTarefa(this)'>🗑️</span>`;

  input.value = ""; 
}

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

function deletarTarefa(elemento) {
  elemento.parentElement.remove(); 
}
