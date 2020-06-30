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

$('.section-specialists-promo__slider').slick({
    slidesToShow: 4,
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

$('.page-content__specialist-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false
});

$('.gallery-slider').slick({
    slidesToShow: 5,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false
});

$('.document-slider').slick({
    slidesToShow: 5,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false
});

$('.specialist-company__slider').slick({
    slidesToShow: 5,
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

$('.btn-filter').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.mobile-menu__filter').fadeIn();
});

$('.filter-box .filter-box__title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.filter-box .filter-box__title').not(this).removeClass('in').next().slideUp();
});

$('.btn-diploma').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('click-btn').parents('.specialist-line__wrap').find('.specialist-line__wrap-hidden').slideToggle();
    $('.certificate-slider').slick({
        slidesToShow: 5,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: false,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
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

// fixed sidebar
// $(function () {
//     var topPos = $('.sidebar-wrapper').offset().top;
//     $(window).scroll(function () {
//         var top = $(document).scrollTop(),
//             pip = $('footer').offset().top,
//             height = $('.sidebar-wrapper').outerHeight();
//         if (top > topPos && top < pip - height) {
//             $('.sidebar-wrapper').addClass('fixed').removeAttr("style");
//         } else if (top > pip - height) {
//             $('.sidebar-wrapper').removeClass('fixed').css({'position': 'absolute', 'bottom': '0'});
//         } else {
//             $('.sidebar-wrapper').removeClass('fixed');
//         }
//     });
// });

$(window).scroll(function () {
    var header = $('.header').height();
    var box = $('.section-specialists-promo').height();
    if ($(this).scrollTop() > header + box) {
        $('.sidebar-wrapper').addClass('fixed');
    } else {
        $('.sidebar-wrapper').removeClass('fixed');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.company-nav-box').addClass('new-block');
    } else {
        $('.company-nav-box').removeClass('new-block');
    }
});

$(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('.menu-card a.active').removeClass('active');
            $('.menu-card a[href="#'+id+'"]').addClass('active');

        }
    })
});

$(".menu-card").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    var heder = $('.header').height();

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top - heder}, 800);
});

$('.gallery-box').fancybox();

$('.document-box').fancybox();

$('.btn-phone').click(function(e) {
    e.preventDefault();
    $(this).parents('.phone').find('span').text( $(this).parents('.phone').data('last') );
    $(this).hide();
});

$('.reviews').each(function () {
    if ($(this).find('.review-box__wrap').length > 5) {
        $(this).find('.review-box__wrap').slice(5).hide();
    }

});

$('.load-more-btn').on('click', function (e) {
    e.preventDefault();
    $('.review-box__wrap:hidden').slice(0, 3).slideDown();

    var onBlock = $('.review-box__wrap:hidden').length;
    if(onBlock <= 0) {
        $('.load-more-btn').hide();
    }
});