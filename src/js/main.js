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
});