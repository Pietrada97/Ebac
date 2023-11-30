$(document).ready(function () {
    // Aplicar máscaras aos campos
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Exemplo de envio do formulário (substitua por sua lógica de envio)
    $('#cadastroForm').submit(function (event) {
        event.preventDefault();
        // Substitua esta parte pela lógica de envio do formulário
        alert('Formulário enviado com sucesso!');
    });
});