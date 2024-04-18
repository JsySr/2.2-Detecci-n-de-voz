$(document).ready(function(){
    // Función para obtener y mostrar los últimos 3 registros de MockAPI
    function obtenerUltimosRegistros() {
        $.getJSON('https://66176aa2ed6b8fa43482988c.mockapi.io/Voz', function(data){
            // Limpiar el contenido anterior de la lista desordenada
            $('#ultimaOrdenLista').empty();
            // Obtener los últimos 3 registros y agregarlos al HTML
            for (var i = data.length - 3; i < data.length; i++) {
                var order = data[i];
                $('#ultimaOrdenLista').append('<li>' + order.accion + ' - ' + order.fecha + '</li>');
            }
        });
    }

    // Llamar a la función para obtener los últimos 3 registros cada 2 segundos
    setInterval(obtenerUltimosRegistros, 2000);
});
