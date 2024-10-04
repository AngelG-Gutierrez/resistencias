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
        { nombre: 'Negro', valor: 'black' },
        { nombre: 'Café', valor: 'brown' },
        { nombre: 'Rojo', valor: 'red' },
        { nombre: 'Naranja', valor: 'orange' },
        { nombre: 'Amarillo', valor: 'yellow' },
        { nombre: 'Verde', valor: 'green' },
        { nombre: 'Azul', valor: 'blue' },
        { nombre: 'Morado', valor: 'purple' },
        { nombre: 'Gris', valor: 'gray' },
        { nombre: 'Blanco', valor: 'white' },
        { nombre: 'Dorado', valor: 'gold' },
        { nombre: 'Plateado', valor: 'silver' }
    ];

    for (let i = 1; i <= numBands; i++) {
        const newSelect = document.createElement('select');
        newSelect.className = 'form-select form-select-sm';
        newSelect.innerHTML = '<option selected>Selecciona el color</option>';
        
        colores.forEach(color => {
            const option = document.createElement('option');
            option.value = color.valor; 
            option.text = color.nombre;
            newSelect.appendChild(option);
        });

        newSelect.addEventListener('change', function() {
            const banda = document.getElementById(`banda${i}`);
            banda.style.backgroundColor = this.value; 
        });

        container.appendChild(newSelect);
    }
}
