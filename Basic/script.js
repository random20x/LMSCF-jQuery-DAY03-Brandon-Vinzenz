$(document).ready(function(){
    $('#animate').fadeIn(5000).delay(2000).slideUp(5000);
});

$(document).ready(function() {
    $('li').on('click', function() {
            $(this).animate({
                    opacity: 0.0,
                    paddingLeft: '+=80'
                }, 500, function() {
                    $(this).remove();
                });
            });
    });

    