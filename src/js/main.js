$(document).ready(function() {
    
    //set the height of the splash page (homepage) to the window height
    function setSplashPgHeight(){
        windowHeight = $(window).innerHeight();
        $(".splashPage").css('height', windowHeight);
    }
    setSplashPgHeight();
    
    $(window).resize(function() {
        setSplashPgHeight();
    });
    
    /*
    $('.navMenuBtn').on('click', function(){
        $('.navMenu').toggle(function(){
            $(this).animate({
                
            }, 400, 'easeOutBack');
        });
    });
    */
    
    $('#navMenuBtn').on('click', function() {
        $('#navMenu').toggleClass('isOpen');
    });
    
    /* Slicker slider scripts */
    $('.workCatalog').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="slickBtn fa fa-chevron-right fa-2x" aria-hidden="true"></i>',
        prevArrow: '<i class="slickBtn fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    });/*End of Slick slider function */

});