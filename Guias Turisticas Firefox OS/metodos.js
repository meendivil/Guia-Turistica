 
var ciudad= 'Guaymas';
/*ciudad*/	
function ciudadselec(r){ciudad=r; $("#titulociudad").html(ciudad); }
		
/*detalles*/	
function datos(opcion,categoria){
	if(categoria==restaurante){
	
		$("#tTitulo").html(categoria[opcion][1]);
		$("#imgDetalle").html('<img src=" imagenes/restaurantes/'+categoria[opcion][7]+'" />');		
		$("#textoDireccion").html('<p>'+categoria[opcion][3]+'</p>');
		$("#textoTelefono").html('<p>'+categoria[opcion][2]+'</p>');
		
		$("#textoTipoComida").html(categoria[opcion][4]);
		$("#textoPrecio").html(categoria[opcion][5]);
		$("#descripcion").html(categoria[opcion][6]);
		$("#paginaweb").html('<a href="http://'+categoria[opcion][8]+'">'+'Pagina web</a>');
		
		
}else if(categoria=='hotel'){
	
}else if(categoria=='diversion'){
	
}else if(categoria=='lugarTuristico'){
	
}else if(categoria=='compras'){
	
}
		
	}
	
/* lista*/	
function listaa(categoria, nc){
	 
	for(i=1;i<restaurante.length;i++){  if(categoria[i][9]==ciudad){
var elementosdelista=elementosdelista+'<li><a href="#'+nc+'"   onClick="datos('+i+','+nc+');"><img src="imagenes/'+nc+'/'+categoria[i][7]+'" /> <h3>'+categoria[i][1]+'</h3><p>'+categoria[i][6]+'</p> </a></li>' ; }
}
	
$("#listaa").html(elementosdelista); 
$('#listaa').listview('refresh');

	} 
	
	
/*mapa*/	

var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map; 
  var currentDirections = null;
  var latitud=27.9139609;
  var longitud=-110.9020749;
  
  function initialize() { 
  if(ciudad=='Guaymas'){latitud=27.937697; longitud=-110.933787; }
   if(ciudad=='Empalme'){latitud=27.991673; longitud=-110.839374;}
    if(ciudad=='San Carlos'){latitud=27.951118; longitud=-111.050848;}
 
    var myOptions = {
      zoom: 14,
      center: new google.maps.LatLng(latitud,longitud),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
     setUndoDisabled(true); 
  } 	
	
	
	
	
	
	
	