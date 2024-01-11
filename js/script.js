$(function() {
    // Menu - INÍCIO
    function scroll(href) {
        var offSetTop = $(href).offset().top;
        $('html, body').animate({scrollTop: offSetTop});
        return false;
    }

    $('nav.mobile').click(function() {
        $('nav.mobile').find('ul').slideToggle();
    })

    $('nav li').click(function() {
        var href = $(this).find('a').attr('href');
        scroll(href);
    })

    $('nav a').click(function() {
        var href = $(this).attr('href');
        scroll(href);
    })
    // Menu - FIM

    // Slick Slider - INÍCIO
    $('.mosaico-container').slick({
		centerMode: false,
		slidesToShow: 6,
		arrow: false,
		responsive: [
            {
                breakpoint: 768,
			    settings: {
                    arrows: false,
				    centerMode: true,
				    slidesToShow: 3
			    }
            },
            {
			    breakpoint: 580,
			    settings: {
				    arrows: false,
				    centerMode: true,
				    slidesToShow: 2
			    }
            },
            {
			    breakpoint: 380,
			    settings: {
				    arrows: false,
				    centerMode: true,
				    slidesToShow: 1
			    }
            }
        ]
    })

    $('#tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    })

    $('#depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
    })
    // Slick Slider - FIM
});