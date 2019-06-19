$(document).ready(function(){
	//setting options
	var speed = 500;						//fade speed
	var autoswitch = true;					//auto slider option
	var autoswitch_speed = 4000;

	//add initial active class
	$('.slide').first().addClass('active');

	//hide all slides
	$('.slide').hide();

	//show first slide
	$('.active').show();

	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else{
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		}else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	$('#next').on('click', nextSlide);
	$('#prev').on('click', prevSlide);

	if(autoswitch){
		setInterval(nextSlide, autoswitch_speed);
	}

	
});