$(document).ready(function () {
    // Adicionar tarefa quando o formulário é enviado
    $("#taskForm").submit(function (event) {
        event.preventDefault();
        const taskText = $("#taskInput").val();
        if (taskText.trim() !== "") {
            const taskItem = $("<li>").text(taskText);
            taskItem.click(function () {
                $(this).toggleClass("completed");
            });
            const deleteButton = $("<button>").text("Remover");
            deleteButton.click(function () {
                $(this).parent().remove();
            });
            taskItem.append(deleteButton);
            $("#taskList").append(taskItem);
            $("#taskInput").val(""); // Limpar o campo de entrada
        }
    });

    // Adicionar tarefa ao clicar no botão "Adicionar Tarefa"
    $("#addTask").click(function () {
        $("#taskForm").submit();
    });
});