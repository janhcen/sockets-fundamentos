var socket = io()

socket.on('connect', function () {
  console.log('Conectado al servidor');
})

socket.on('disconnect', function () {
  console.log('Perdimos conexi[on con el servidor');
})

socket.on('enviarMensaje', function (mensaje) {
  console.log('Servidor', mensaje);
})

socket.emit('enviarMensaje', {
  usuario: 'John',
  mensaje: 'Hola Mundo'
}, function (resp) {
  console.log('Respuesta del servidor', resp)
})