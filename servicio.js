var app       = require('express')();
var http      = require('http').Server(app);
var io        = require('socket.io')(http);
var fs        = require('fs');
var basicAuth = require('basic-auth-connect');
Tail          = require('tail').Tail;

var g_usuario  = 'test';
var g_password = 'test';

var filename = process.argv[2];
if (!filename){
  return util.puts("Usa: node <servicio.js> <archivo de log>");
} 


app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.php');
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile(__dirname + '/index.php', function(err, data){
    res.write(data, 'utf8');
    res.end();
  });
}).use( basicAuth(function(user, pass){
  return g_usuario == user && g_password == pass;
} ) );

app.get('/js/todo.js', function(req, res){
  //res.sendFile(__dirname + '/index.php');
  res.writeHead(200, {'Content-Type': 'text/script'})
  fs.readFile(__dirname + '/js/todo.js', function(err, data){
    res.write(data, 'utf8');
    res.end();
  });
});

app.get('/css/todo.css', function(req, res){
  //res.sendFile(__dirname + '/index.php');
  res.writeHead(200, {'Content-Type': 'text/stylesheet'})
  fs.readFile(__dirname + '/css/todo.css', function(err, data){
    res.write(data, 'utf8');
    res.end();
  });
});

io.on('connection', function(socket){
  console.log('Client connected');
  console.log( "file", filename );

  tail = new Tail( filename );

  tail.on("line", function( data ) {
    console.log( "line", data );
    //console.log( "line", data.toString('utf-8') );
    socket.send( { file: filename, tail : data } );
  });

  tail.on("error", function(error) {
    console.log('ERROR: ', error);
  });

});

http.listen(81, function(){
  console.log('listening on *:81');
});

