document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    var mensagemDiv = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagemDiv.textContent = "Formulário válido! B é maior que A.";
        mensagemDiv.style.color = "green";
    } else {
        mensagemDiv.textContent = "Formulário inválido! B deve ser maior que A.";
        mensagemDiv.style.color = "red";
    }
});