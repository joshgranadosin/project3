// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require materialize-sprockets 
//= require_tree .



// NAV BAR

console.log("application.js loaded")
$(document).on('page:load', function() {
    console.log("document ready")
    $(".dropdown-button").dropdown();
    // // CHALLENGE BUTTONS
    //      $('#easy').click(function() {
    //     window.location.href = 'questions/easy';
    //     return false;
    //  });

    //     $('#medium').click(function() {
    //     window.location.href = 'questions/medium';
    //     return false;
    //  });


    //        $('#hard').click(function() {
    //     window.location.href = 'questions/hard';
    //     return false;
    //  });

    // //LOGIN 
    //         $('#login').click(function() {
    //     window.location.href = '/login';
    //     return false;
    //  });

    // DELETE BUTTON FOR MY SAVED SOLUTIONS

    $('.delete').click(function(e){
        // url: 'solutions/:id'
        // var elem = $(this).parent();
        var elem = $(this); 
        var id = elem.attr('id');
        console.log(id);
        var url = '/solutions/' + id ;
        $.ajax({
            url: url,
            method: 'DELETE'
            // ,
            // success: function(){
            //     parent.remove();
        }).always(function(){
            location.reload()
        })
    })

    // VOTING BUTTONS

    $('#up').click(function (e) {
      $(this).toggleClass('on');
    });

    $('#down').click(function (e) {
      $(this).toggleClass('on');
    });

    // FLASH ALERTS
    $(function() {
      setTimeout(function(){
        $('.alert').slideUp(500);
      }, 1000);
    });





    // COUNTDOWN TIMER

    setWebState("NO_STATE")


    state = $('#difficulty').attr('data');


    function isData() {
        if (state == undefined) {
            state = "NO_STATE"
        } else {
           setWebState(state);
        }
    }

    isData();
    console.log(state);

    function setWebState(webstate) {
        CURRENT_STATE = webstate;
        executeState();
    }



    function executeState() {
      if (CURRENT_STATE === "NO_STATE" ) {
        

      } else if (CURRENT_STATE === "EASY_STATE") {
        countdown( "countdown", 5, 00 );

      } else if (CURRENT_STATE === "MEDIUM_STATE") {
        countdown( "countdown", 10, 00 );

      } else if (CURRENT_STATE === "HARD_STATE") {
        countdown( "countdown", 15, 00 );

      }

    }



     function countdown( elementName, minutes, seconds )
    {
        var element, endTime, hours, mins, msLeft, time;

        function twoDigits( n )
        {
            return (n <= 9 ? "0" + n : n);
        }

        function updateTimer()
        {
            msLeft = endTime - (+new Date);
            if ( msLeft < 1000 ) {
                element.innerHTML = "Time is up!";
                $('.easy_box').prop('readonly',true);
                $('.medium_box').prop('readonly',true);
                $('.hard_box').prop('readonly',true);
            } else {
                time = new Date( msLeft );
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
            }
        }

        element = document.getElementById( elementName );
        endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
        updateTimer();
    }

 });