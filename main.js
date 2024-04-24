$(document).ready(function(){
    // Variable para almacenar el último registro procesado
    let ultimoRegistroProcesado = null;

    // Función para obtener y mostrar los últimos registros de MockAPI
    function obtenerUltimosRegistros() {
        $.getJSON('https://66176aa2ed6b8fa43482988c.mockapi.io/Voz', function(data){
            // Verificar si hay nuevos registros
            if (data.length > 0 && JSON.stringify(data[data.length - 1]) !== JSON.stringify(ultimoRegistroProcesado)) {
                // Almacenar el último registro como el último procesado
                ultimoRegistroProcesado = data[data.length - 1];
                
                // Limpiar el contenido anterior de la lista desordenada
                $('#ultimaOrdenLista').empty();
                
                // Obtener los últimos registros y agregarlos al HTML
                let order;
                for (var i = data.length - 3; i < data.length; i++) {
                    order = data[i];
                    $('#ultimaOrdenLista').append('<li>' + order.accion + ' - ' + order.fecha + '</li>');
                }
                
                // Procesar la nueva orden
                ordenes(order.accion);
            }
        });
    }

    const ordenes = (orden) => {
        console.log(orden)
            
                // Aquí puedes agregar el código para abrir Google en una nueva pestaña
                if (orden === 'se abrio una nueva pestaña con google'){
                    window.open("https://www.google.com", "_blank"); 
                }
                if (orden === 'se abrio una nueva pestaña con youtube'){
                    window.open("https://www.youtube.com", "_blank");
                }
                if (orden === 'se abrio una nueva pestaña y cerro en 3 segundos'){
                    const ventana = window.open('');
                    // Cerrar la ventana después de 3 segundos
                    setTimeout(function () {
                        ventana.close();
                    }, 3000);
                   
                }
                if (orden === 'se abrio una nueva pestaña de 1000 * 800'){
                    // Abrir una nueva ventana con dimensiones específicas y sin barras de herramientas
                    window.open('https://www.google.com', '_blank', 'width=1000,height=800,toolbar=no');
                }
                if (orden === 'se abrio una nueva pestaña de 350 * 500'){
                    // Abrir una njueva ventana con dimensiones específicas y sin barras de herramientas
                    window.open('https://www.youtube.com', '_blank', 'width=150,height=300,toolbar=no');
                }
        }

    // Llamar a la función para obtener los últimos registros cada cierto tiempo
    setInterval(obtenerUltimosRegistros, 4000);
});
