function insertValue (valor) {
    //console.log (valor);
    document.getElementById('caixa_texto').value += valor;
}

function deletar () {
    document.getElementById('caixa_texto').value = '';
}

function apagar() {
    const display = document.getElementById('caixa_texto');
    display.value = display.value.slice(0, -1);
}

function resultado () {
    const display = document.getElementById('caixa_texto');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
        setTimeout (() => {
            display.value = "";
    }, 1000);
    }
}