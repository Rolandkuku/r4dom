jQuery(document).ready(function($)
{
 
  // au clic sur un lien prÃ©cÃ©dÃ© d'un diÃ¨se hashtag
    $('.container a[href^="#"]').on('click', function(evt){
       // enregistre la valeur de l'attribut  href dans la variable target
	   var target = $(this).attr('href');
       /* 	- le sÃ©lecteur $(html, body) permet de corriger un bug sur chrome 
       			et safari (webkit) 	
       		- on arrÃªte toutes les animations en cours 
	   		- on fait maintenant l'animation vers le haut (scrollTop) vers 
	   			notre ancre target 
        */
       $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1000 );
        // bloquer le comportement par dÃ©faut: on ne rechargera pas la page 
        // mais on ne changera pas non plus l'url dans la barre de navigation 
       evt.preventDefault(); 
    });


});