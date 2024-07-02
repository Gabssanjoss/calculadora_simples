function somar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = num1 + num2;
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, preencha ambos os campos com números válidos.';
    }
}

function subtrair() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = num1 - num2;
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, preencha ambos os campos com números válidos.';
    }
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = num1 * num2;
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, preencha ambos os campos com números válidos.';
    }
}

function dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            var resultado = num1 / num2;
            document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
        } else {
            document.getElementById('resultado').innerText = 'Não é possível dividir por zero.';
        }
    } else {
        document.getElementById('resultado').innerText = 'Por favor, preencha ambos os campos com números válidos.';
    }
}

function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').innerText = '';
}
