document.getElementById("form-comparar").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let campoA = parseInt(document.getElementById("campo-a").value);
    let campoB = parseInt(document.getElementById("campo-b").value);

    if (campoB > campoA) {
        alert("PERFEITO! Identidade validada.");
    } else {
        alert("INVALIDO! você não é um ser humano? o.O");
    }
});