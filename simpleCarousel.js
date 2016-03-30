
/**
 * See (http://jquery.com/).
 * @name jQuery
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf jQuery
 */
/**
   * Simple Carousel - an awesome jQuery plugin for carousel. 
   *
   * @class simpleCarousel
   * @memberOf jQuery.fn
   * @fileOverview Contains the awesome plug-in code.
   * @version 1
   * @author Abdul Raheem C
   * Cpyright 2016
   */

(function( $ ){

	$.fn.simpleCarousel = function ( options ){
			
		// default settings
		var settings = $.extend({
		
			//slider settings
			slidesCount: 3,
			slideDuration: 2,					// In Sec's
			
			//autoplay settings
			autoPlay: true,						// Boolean i.e., true / false
			autoPlayDirection: 'right',			// autoplay direction from i.e., right / left
			autoPlayDuration: 5,				// In Sec's

			//controlls
			controlls: true,					// enable or disable controlls by Boolean i.e., true / false
			leftNavId: 'sc-left',
			rightNavId: 'sc-right'

	}, options );
			
	//accesing the css properties
	var scthis = this;
	var slides = $(scthis).children().children().length;
	var eleWidth = $(scthis).children().width();

	//each slide css settings
	$(scthis).children().children().css({
		margin: '0 10px',
		width: ($(scthis).width() - settings.slidesCount * 20) / settings.slidesCount,
		height: $(scthis).height(),
		'float': 'left'
	});
	
	var finalWidth = ($(scthis).children().children().width() * slides) + (slides * 20);
	$(scthis).children().first().css({width: finalWidth + "px"});
	
	//initializing function
	var tr;
	var init = function(){
		var autoDuration = settings.autoPlayDuration * 1000;
		tr = setInterval(function(){
			if(settings.autoPlayDirection == 'right')
			prevSlide();
			else if(settings.autoPlayDirection == 'left')
			nextSlide();
		}, autoDuration);
	}

	//events starts from here
	var applyMargin = 0;
	var timeDuration = settings.slideDuration * 1000;
	
	//loads previous slide
	function prevSlide(){
		
		applayMargin = $(scthis).children().children().width() + 20;
		$(scthis).children().children().first().animate({
			marginLeft: -applayMargin
		}, timeDuration, function(){
			var clone_ele = $(scthis).children().children().first().clone();
			$(scthis).children().children().first().remove();
			$(scthis).children().first().append(clone_ele);
			$(scthis).children().first().children().css({'margin-left':'10px'});
		});
	}

	//loads next slide
	function nextSlide(){
		
		applayMargin = $(scthis).children().children().width() + 20;
		$(scthis).children().children().first().animate({}, function(){
			var clone_ele = $(scthis).children().children().last().clone();
			$(scthis).children().children().last().remove();
			var newele = $(scthis).children().first().prepend(clone_ele);
			newele.children().first().css({'margin-left': -applayMargin});
			$(scthis).children().children().first().animate({
				marginLeft: 10,
			}, timeDuration);
			 
		});
	}
	
	if(settings.controlls === true){
		//previous slide event will be trigger when the user clicks
		$("#"+settings.rightNavId).on('click',function(){
			// clears the auto play when event triggers and resets after few seconds
			if( settings.autoPlay === true ){
				clearInterval(tr);
				setTimeout( function(){ 
					init();
				} , 6000 );
			}
			prevSlide();
		});

		//next slide event will be trigger when the user clicks
		$("#"+settings.leftNavId).on('click',function(){
			// clears the auto play when event triggers and resets after few seconds
			if( settings.autoPlay === true ){
				clearInterval(tr);
				setTimeout( function(){ 
					init();
				} , 6000 );
			}
			nextSlide();
		});
	} else {
		$(scthis).children().not(':first').remove();
	}
	
	//autoplay sliding will be trigger intialy while the autoplay options is enable
	if( settings.autoPlay === true ){
		init();
	}
};
}( jQuery ));