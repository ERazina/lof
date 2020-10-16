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
      $(".res-dash-popup-close").on("tap",function(){
        $('.res-dash-menu-card').toggleClass('show');
      });

        // $('.res-dash-select2').select2();

        $('.res-dash-red-cancel').on('click', function(){
          $('.res-dash-image-preview').hide();
          $('.res-dash-file-wrapper').toggle();
        });
        
          $(".js-example-basic-multiple").select2();
        

        // $('#pie').pieLoader( );
          $( "#calendar" ).datepicker({
            dayNamesMin: [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ],
            functionfirstDay: 1,
            hideIfNoPrevNext: true,
            minDate: new Date(),
            monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
          });

          $.datepicker.setDefaults($.datepicker.regional['de']);



      jQuery('#datetimepicker').datetimepicker({
       i18n:{
        de:{
         months:[
          'Januar','Februar','März','April',
          'Mai','Juni','Juli','August',
          'September','Oktober','November','Dezember',
         ],
         dayOfWeek:[
          "So.", "Mo", "Di", "Mi", 
          "Do", "Fr", "Sa.",
         ]
        }
       },
       format: 'HH:MM', locale: 'de',
       inline: false,
       timeFormat: 'HH:MM',
       timepicker:true,
       firstDay: 1,
       format:'d.m.Y HH:MM',
       stepHour: 1,
       stepMinute: 30,
       showTimePicker: true,
       minDateTime: new Date(),
       lang: 'de',
       timeText: "Stunde",
       hourText: 'Uhr', 
       minuteText: "Minute",
       controlType: 'select',
      });
});
