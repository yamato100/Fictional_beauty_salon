// 
var _window = $(window),
    heroBottom;
 
_window.on('scroll',function(){
    var heroBottom = $('#home').height();
    console.log(heroBottom )
    console.log(_window.scrollTop() )
    if(_window.scrollTop() >= heroBottom){
        $('header').addClass('transform');
        $(".logo img").attr("src", "img/logo1.png");
    }
    else{
        $('header').removeClass('transform');
        $(".logo img").attr("src", "img/logo.png");
    }
    console.log(document.getElementsByClassName( "site-header" ))
});
 
_window.trigger('scroll');


// スムーズスクロール
var scroll = new SmoothScroll('a');

// $(window).scroll(function(){
//     var st = $(window).scrollTop();
//     if(st < 1000){
//         $(".logo img").attr("src", "img/logo.png");
//         console.log('logo_white')
//     }else{
//         $(".logo img").attr("src", "img/logo1.png");
//         console.log('logo_black')
//     }
// });