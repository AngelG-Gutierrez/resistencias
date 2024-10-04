function nbandas() {
    const bandasSelect = document.getElementById('bandas');
    const valorSeleccionado = bandasSelect.value;
    const container = document.getElementById('band-container');
    const bandas = document.querySelectorAll('.banda'); 

    container.innerHTML = '';
    bandas.forEach(banda => {
        banda.style.backgroundColor = 'transparent';
    });

    let numBands;

    if (valorSeleccionado === "1") {
        numBands = 4;
    } else if (valorSeleccionado === "2") {
        numBands = 5;
    } else if (valorSeleccionado === "3") {
        numBands = 6;
    } else {
        return;
    }

    const colores = [
        { nombre: 'Negro', valor: 'black', multiplicador: 1, sig: 0 },
        { nombre: 'Café', valor: 'brown', multiplicador: 10, sig: 1 },
        { nombre: 'Rojo', valor: 'red', multiplicador: 100, sig: 2 },
        { nombre: 'Naranja', valor: 'orange', multiplicador: 1000, sig: 3 },
        { nombre: 'Amarillo', valor:  'yellow', multiplicador: 10000, sig: 4 },
        { nombre: 'Verde', valor: 'green', multiplicador: 100000, sig: 5 },
        { nombre: 'Azul', valor: 'blue', multiplicador: 1000000, sig: 6 },
        { nombre: 'Morado', valor: 'purple', multiplicador: 10000000, sig: 7 },
        { nombre: 'Gris', valor: 'gray', multiplicador: null, sig: 8 },
        { nombre: 'Blanco', valor: 'white', multiplicador: null, sig: 9 },
        { nombre: 'Dorado', valor: 'gold', multiplicador: 0.1, sig: null },
        { nombre: 'Plateado', valor: 'silver', multiplicador: 0.01, sig: null }
    ];

    for (let i = 1; i <= numBands; i++) {
        const newSelect = document.createElement('select');
        newSelect.className = 'form-select form-select-sm';
        newSelect.innerHTML = '<option selected>Selecciona el color</option>';

        colores.forEach(color => {
            const option = document.createElement('option');
            option.value = i <= 2 ? color.sig : color.multiplicador;
            option.text = color.nombre;
            newSelect.appendChild(option);
        });

        newSelect.addEventListener('change', function() {
            const banda = document.getElementById(`banda${i}`);
            banda.style.backgroundColor = colores.find(c => c.sig == this.value || c.multiplicador == this.value).valor;
        });

        container.appendChild(newSelect);
    }
}

function calcularResistencia() {
    const selects = document.querySelectorAll('#band-container select');
    
    const banda1 = parseInt(selects[0].value);
    const banda2 = parseInt(selects[1].value);
    const multiplicador = parseFloat(selects[2].value);

    let resistencia;

    if (selects.length >= 4) {
        const banda3 = parseInt(selects[2].value);
        resistencia = ((banda1 * 100) + (banda2 * 10) + banda3) * multiplicador;
    } else {
        resistencia = ((banda1 * 10) + banda2) * multiplicador;
    }

    document.getElementById('resultado').textContent = `Valor de la resistencia: ${resistencia} Ω`;
}
