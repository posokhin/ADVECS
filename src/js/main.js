$(document).ready(function(){
    $('.benefit__list').on('click', '.benefit__item:not(benefit__item active)', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').closest('.benefit__row').find('.benefit__right').removeClass('active').animate({
            opacity: 0
        },300).eq($(this).index()).addClass('active').animate({
            opacity: 1
        },300);
    });
    
    var quest = $('.quests__item');
    quest.on('click', function(){
        $(this).toggleClass('active').find('.quests__item-answer').slideToggle();
    })

    
    var reviewSlider = $('.reviews__right-list');
    reviewSlider.slick({
        adaptiveHeight: 1,
    });
    reviewSlider.on('init afterChange afterChange reInit setPosition', function(event, slick, currentSlide, nextSlide){
        var current = $('.reviews__right .nums .current');
        var all = $('.reviews__right .nums .all');
        if(current.text() < 10){
            current.text('0'+ (slick.currentSlide+1))
        }
        else{
            current.text(slick.currentSlide+1);
        }
        if(all.text() < 10){
            all.text('0' + slick.slideCount);
        }
        else{
            all.text(slick.slideCount);
        }
    });

    $('.team__list').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: $('.team__nav-item-right'),
        prevArrow: $('.team__nav-item-left'),
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var phone = document.querySelectorAll('input[name="phone"]');
    phone.forEach(function(el){
        var phoneMask = IMask(
            el, {
                mask: '+{7}(000)000-00-00'
            });
    });

    $('.header__burger').on('click', function(){
        $('.header__burger').toggleClass('active');
        $('.header-mobile-menu').toggleClass('open');
    });


    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        $('.header-mobile-menu').removeClass('open');
        $('.header__burger').removeClass('active');
        $('html,body').animate({
            scrollTop: target.offset().top - 50
        },500);
    });

    function showPopupServices(){
        $('.overlay').fadeIn();
        $('.popup__services').fadeIn();
    }
    function showPopupFeedback(){
        $('.overlay').fadeIn();
        $('.popup__feedback').fadeIn();
    }
    function HidePopupFeedback(){
        $('.popup__feedback').fadeOut();
    }
    function showPopupSocial(){
        $('.overlay').fadeIn();
        $('.popup__social').css({
            display: 'flex'
        }).fadeIn();
    }
    function HidePopup(){
        $('.overlay').fadeOut();
        $('.popup').fadeOut();
    }
    function showPopupCall(){
        $('.overlay').fadeIn();
        $('.popup__call').fadeIn();
    }
    function HidePopupCall(){
        $('.popup__call').fadeOut();
    }
    function showPopupSuccess(){
        $('.overlay').fadeIn();
        $('.popup__call-success').fadeIn();
    }
    $('.js-call').on('click', function(e){
        e.preventDefault();
        showPopupCall();
    });
    $('.js-close-popup').on('click', function(){
        HidePopup();
    });
    $('.js-open-success').on('click', function(e){
        e.preventDefault();
        HidePopupCall();
        HidePopupFeedback();
        showPopupSuccess();
    });
    $('.js-open-popup-social').on('click', showPopupSocial);
    $('.js-open-popap-feedback').on('click', function(e){
        e.preventDefault();
        showPopupFeedback();
    });
    $('.js-open-popup-services').on('click', function(e){
        e.preventDefault();
        showPopupServices();
    });

    $(document).ready(function(){
        if(!localStorage.getItem('popap-share')){
            localStorage.setItem('popap-share', 'true');
            var timeout = setTimeout(showPopupSocial, 3000);
        }
    });
});