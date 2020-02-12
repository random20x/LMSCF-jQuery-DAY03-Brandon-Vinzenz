var a = 0;
var c = 0;
$(document).mousemove(function(al) {
    a = al.pageX - 100;
    c = al.pageY - 100;
    $("#moveme").css({ "top": c + "px", "left": +a + "px" });
    console.log(a, c)
});
$("#moveme").on("click", function() {
    $(document).off("mousemove");
    $("#moveme").animate({
        top: "+300"
    }).fadeIn(1000).fadeOut(2000)
});