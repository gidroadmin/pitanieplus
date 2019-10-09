$(function(){
    $('.menuToggle').on('click', function(){

        $('.site-navigation').slideToggle(300, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });

    });
})

$(function(){
    $('.left-menu-Toggle').on('click', function(){

        $('.left-nav').slideToggle(300, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });

    });
})