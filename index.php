<html>
<head>
	<title></title>
	<link rel="stylesheet" href="css/todo.css">
</head>
<body>
	<div class="container">
		<h1>Visualizar logs del servidor</h1>
		<div class="row">
			<div class="col-md-12">
				<p>Archivo: <span id="nombre_archivo"></span></p>
			</div>
		</div>

		<div id="container">

	    </div>

	    <pre id="info"></pre>
	  	<pre id="tail"></pre>
	</div>


    <!--<script src="/socket.io/socket.io.js"></script>-->
    <script src="http://192.168.59.103:5081/socket.io/socket.io.js"></script>
	<script src="js/todo.js" type="text/javascript"></script>
</body>
</html>