$(document).ready(function(){
    

    $('#btn_createList').click(function(){
        $('.ul_current').append($('<li>', {
                text: $('#input_listItem').val()
        }));
    });  
    $('#animate').fadeIn(5000).delay(2000).slideUp(5000);
    $('li').on('click', function() {
        $(this).animate({
                opacity: 0.0,
                paddingLeft: '+=80'
            }, 500, function() {
                $(this).remove();
            });
        });
});



