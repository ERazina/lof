$(function(){

        //open popup click
        $(".res-dash-card").on("click",function(e){
          e.stopPropagation();
          $('.res-dash-menu-card').toggleClass('show');
        });

        //open popup tap
        $(".res-dash-card").on("tap",function(e){
          e.stopPropagation();
          $('.res-dash-menu-card').toggleClass('show');
        });

      //open menu click
        $(".res-dash-card-menu-icon").not(".res-dash-card").on("click",function(e){
          e.stopPropagation();
          $(this).parent().find('.res-dash-card-menu').toggleClass('show-menu');
        });

        //open menu tap
        $(".res-dash-card-menu-icon").not(".res-dash-card").on("tap",function(e){
          e.stopPropagation();
          $(this).parent().find('.res-dash-card-menu').toggleClass('show-menu');
        });

      //close popup click
      $(".res-dash-popup-close").on("click",function(){
        $('.res-dash-menu-card').toggleClass('show');
      });

      //close popup tap
      // $(".res-dash-popup-close").on("tap",function(){
      //   $('.res-dash-menu-card').toggleClass('show');
      // });
});