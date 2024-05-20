function calcularMaterial() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    const areaTotal = length * width;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El área total a tapizar es de ${areaTotal.toFixed(2)} cm²`;
}

function limpiarCampos() {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("resultado").innerText = "";
}
