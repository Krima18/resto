$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass("fa fa-pause"))
        {
            $('#carouselButton').children('span').removeClass("fa fa-pause");
            $('#carouselButton').children('span').addClass("fa fa-play");
            $('#mycarousel').carousel('pause');
        }
        else
        {
            $('#carouselButton').children('span').removeClass("fa fa-play");
            $('#carouselButton').children('span').addClass("fa fa-pause");
            $('#mycarousel').carousel('cycle');
        }

       
    });

        $('#loginJs').attr('data-toggle','modal');
        $('#loginJs').attr('data-target','#loginmodal');
  
        $('#reserveJs').attr('data-toggle','modal');
        $('#reserveJs').attr('data-target','#reserve');
   
   

});