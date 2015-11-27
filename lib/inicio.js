var Application = function() {
    
    //var socket  = new io.Socket(null, {port: 8000, autoConnect: true});
    //socket.connect();
    var socket = new io();
    //socket.connect('http://logme:9000', { autoConnect: true});
    socket.connect('http://192.168.59.103:5001/', { autoConnect: true});

    console.log("this", socket);

    var lines = 0;

    socket.on('connect', function() {
      console.log('Connected to:', socket.host );
    });

    socket.on('message', function(message) {
      
      if (message.file) {
        $('#info').html( '$ tail -f ' + message.file );
      };
      if (message.tail) {

        this.nueva_cadena = message.tail;
        this.regla_fecha_access = /\[(\d{1,2})\/[A-z]{3}\/(\d{4})\:(\d{1,2})\:(\d{1,2})\:(\d{1,2})\ \-(\d{4})\]/;
        this.datos_cadena = this.nueva_cadena.match( this.regla_fecha_access );
        this.nueva_cadena = this.nueva_cadena.replace( this.regla_fecha_access, '<strong>' + this.datos_cadena[0] + '</strong>' );
        console.log( "this.nueva_cadena", this.nueva_cadena);

        this.texto_final = this.nueva_cadena;

        $('#tail').html( $('#tail').html() + this.texto_final + "<br />" );
        lines++
        $('#tail').scrollTop( lines * 100 );
      }
    });

    $('#act').click(function () {
      socket.emit('peticionActualizacion');
    });
    
    return {
      socket : socket
    };
  };
 
$(function() { var app = Application(); });