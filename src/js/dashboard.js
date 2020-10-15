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

          /* Локализация timepicker */
      $.timepicker.regional['de'] = {
        timeOnlyTitle: 'Выберите время',
        timeText: 'Время',
        hourText: 'Uhr',
        minuteText: 'Minute',
        timezoneText: 'Часовой пояс',
        timeFormat: 'HH:mm',
        isRTL: false
      };
      $.timepicker.setDefaults($.timepicker.regional['de']);

      var myControl = {
        create: function(tp_inst, obj, unit, val, min, max, step){
          $('<input class="ui-timepicker-input" value="'+val+'" style="width:50%">')
            .appendTo(obj)
            .spinner({
              min: min,
              max: max,
              step: step,
              change: function(e,ui){
                if(e.originalEvent !== undefined)
                  tp_inst._onTimeChange();
                tp_inst._onSelectHandler();
              },
              spin: function(e,ui){
                tp_inst.control.value(tp_inst, obj, unit, ui.value);
                tp_inst._onTimeChange();
                tp_inst._onSelectHandler();
              }
            });
          return obj;
        },
        options: function(tp_inst, obj, unit, opts, val){
          if(typeof(opts) == 'string' && val !== undefined)
            return obj.find('.ui-timepicker-input').spinner(opts, val);
          return obj.find('.ui-timepicker-input').spinner(opts);
        },
        value: function(tp_inst, obj, unit, val){
          if(val !== undefined)
            return obj.find('.ui-timepicker-input').spinner('value', val);
          return obj.find('.ui-timepicker-input').spinner('value');
        }
      };

      $("#datepicker").datetimepicker({controlType: myControl});





});
