$(document).ready(function(){
    // Función para obtener y mostrar la última orden de MockAPI
    function obtenerUltimaOrden() {
        $.getJSON('https://66176aa2ed6b8fa43482988c.mockapi.io/Voz', function(data){
            // Obtener la última orden
            var lastOrder = data[data.length - 1];
            // Limpiar el contenido anterior de la lista desordenada
            $('#ultimaOrdenLista').empty();
            // Agregar el último dato como un elemento de la lista
            $('#ultimaOrdenLista').append('<li>' + lastOrder.text + '</li>');
        });
    }

    // Llamar a la función para obtener la última orden cada 2 segundos
    setInterval(obtenerUltimaOrden, 2000);
});
