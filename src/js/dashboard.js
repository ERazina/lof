$(function(){


      $(".res-dash-card-menu-icon").on("click",function(){
        if($('.res-dash-card-menu').hasClass('hide')){
            $('.res-dash-card-menu').addClass('show');
            $('.res-dash-card-menu').removeClass('hide');
        }
        else{
            $('.res-dash-card-menu').addClass('hide');
            $('.res-dash-card-menu').removeClass('show');
        }
      });

      $(".res-dash-card-menu-icon").on("tap",function(){
        if($('.res-dash-card-menu').hasClass('hide')){
            $('.res-dash-card-menu').addClass('show');
            $('.res-dash-card-menu').removeClass('hide');
        }
        else{
            $('.res-dash-card-menu').addClass('hide');
            $('.res-dash-card-menu').removeClass('show');
        }
      });
});