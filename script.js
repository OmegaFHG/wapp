document.addEventListener("DOMContentLoaded", function () {
    const hydrationForm = document.getElementById("hydration-form");
    const logList = document.getElementById("log-list");
    const totalAmountElement = document.getElementById("total-amount");

    let totalAmount = 0;

    hydrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const date = document.getElementById("date").value;
        const amount = parseInt(document.getElementById("amount").value, 10);

        // Verifica se a quantidade de agua inserida é válida
        if (isNaN(amount) || amount <= 0) {
            alert("Insira uma quantidade válida de água.");
            return;
        }

        // Atualize a soma total de agua inserida
        totalAmount += amount;
        totalAmountElement.textContent = totalAmount;

        // Crie um novo item de registro para adicionar à lista de quantidade adicionada
        const logItem = document.createElement("li");
        logItem.textContent = `Data: ${date}, Quantidade: ${amount} ml`;

        // Adicione o item de registro à lista
        logList.appendChild(logItem);

        // Limpe os campos do formulário assim que termina de inserir os dados
        document.getElementById("date").value = "";
        document.getElementById("amount").value = "";
    });
});
