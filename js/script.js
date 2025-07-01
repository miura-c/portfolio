$(function(){
    $('#header').load('header.html'); // header.htmlを読み込む
});
    $(function(){
    $('#head').load('head.html'); // head.htmlを読み込む
});

$(function(){
    $(window).on('load scroll',function (){
        $('.go-up').each(function(){
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var height = $(window).height();
            if (scroll > target - height){
                $(this).addClass('active');
            }
        });
    });
});

//scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 150;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollAnimationElm[i].classList.add('on');
        }
        }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});