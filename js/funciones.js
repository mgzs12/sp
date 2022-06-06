jQuery(document).ready(listo);


enviar:function(){
	 var idorgan=jQuery("nombre").val();
	 var nombre=jQuery("nombre").val();
	 var nombre=jQuery("nombre").val();
	 var nombre=jQuery("nombre").val();
	 var nombre=jQuery("nombre").val();
	 var nombre=jQuery("nombre").val();

jQuery.ajax({
	method : "POST",
	url : "insertar.php",
	date:{


	}

})

}


//crea una funcion que hace algo y se puede utilizar varias veces
function listo(){

	jQuery(".barrahamb").click(function(e){// se pone la accion de la barra del menu en moviles, e=representara mi accion
		e.preventDefault();// deje de funcionar la accion por defecto, toggleClass(Agrega y quita)
		jQuery("header .container nav").toggleClass("open");
		jQuery(".barrahamb i").toggleClass("fa-times-circle");// PAra la equis en la barra cuando se abre

	});

	jQuery("header .container nav a").click(function(){// se empieza a trabajar dentro de cada a en los nav
		jQuery("header .container nav").removeClass("open");
		jQuery(".barrahamb i").removeClass("fa-times-circle")
		
		var dev =jQuery(this).attr("href");// Se dirige a donde e le hace click

		
		jQuery("html,body").animate({// trabajare con html y el body
			"scrollTop":jQuery(dev).offset().top -95//manda a la secciion que queremos
		})
	});

}