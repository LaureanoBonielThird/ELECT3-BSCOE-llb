$(document).submit(function(){
    $('#TestForm input[type="text"]').blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
            $(this).css({"border": '#ff8e00 2px solid'});
        } else {
            $(this).removeClass("error");
            $(this).css({"border": '#123abc 1px solid'});
        }
    });
});

