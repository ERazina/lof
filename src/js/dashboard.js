$(function(){

      $(".res-dash-card-menu-icon").not('.res-dash-card').on("click",function(){
        $(this).parent().find('.res-dash-card-menu').toggleClass('show-menu');
      });

      $(".res-dash-card-menu-icon").on("tap",function(){
        $(this).parent().find('.res-dash-card-menu').toggleClass('show-menu');
      });


      $(".res-dash-card").not(".res-dash-card-menu-icon").on("click",function(){
        $('.res-dash-menu-card').toggleClass('show');
      });

      $(".res-dash-popup-close").on("click",function(){
        $('.res-dash-menu-card').toggleClass('show');
      });

      // $(".res-dash-card").not(".res-dash-card-menu-icon").on("click",function(){
      //   $('.res-dash-menu-card').toggleClass('show');
      // });

      // $(".res-dash-popup-close").on("tap",function(){
      //   console.log(1);
      //   $('.res-dash-menu-card').toggleClass('show');
      // });
});