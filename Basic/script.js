$(document).ready(function(){
    $('#animate').fadeIn(5000).delay(2000).slideUp(5000);
    $('li').on('click', function(){  
        $(this).animate(2000){
            opacity:0.0;
            paddingLeft: '+=80'
        }, 500, function() {
            $(this).remove();
        });
    });
});

