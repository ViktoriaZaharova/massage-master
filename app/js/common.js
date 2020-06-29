// $('.list-category').each(function () {
//     if ($(this).find('li').length > 12) {
//         $(this).find('li').slice(12).hide();
//     }
// });

$('.load-more').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent().find('ul li:hidden');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');

        content.slideDown();
    } else {
        $this.removeClass('trigger');

        $('.list-category').each(function () {
            $(this).find('li').slice(12).slideUp();
        });
    }
});

$('.interview-specialist__slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false
});

$('.interview-salon__slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false
});

$('.sale-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false
});

$('.btn-close, .overlay').click(function () {
   $('.overlay').fadeOut();
   $('.mobile-menu').fadeOut();
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu__cabinet').fadeIn();
});

$('.btn-services').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.mobile-menu__services').fadeIn();
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 520) {
        $('.specialists-new__wrapper').slick({
            slidesToShow: 2,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false
        });
    } else {
        $(".specialists-new__wrapper.slick-initialized").slick("unslick");
    }
});
// slick active