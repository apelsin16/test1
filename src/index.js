import 'bootstrap';
import './sass/styles.scss';
import certificate1 from './img/1.jpg';
import certificate2 from './img/2.jpg';
import certificate3 from './img/3.jpg';
import certificate4 from './img/4.jpg';
import certificate5 from './img/5.jpg';
import certificate6 from './img/6.jpg';
import certificate7 from './img/7.jpg';
import certificate8 from './img/8.jpg';

const img1 = document.querySelector('#img1');
img1.src = certificate1;
img1.srcset = certificate5;
const img2 = document.querySelector('#img2');
img2.src = certificate2;
img2.srcsetg = certificate6;
const img3 = document.querySelector('#img3');
img3.src = certificate3;
img3.srcset = certificate7;
const img4 = document.querySelector('#img4');
img4.src = certificate4;
img4.srcset = certificate8;


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      
    };
  }
   
  function initializeClock(id, endtime) {
   
    var days1 = document.getElementById('days1');
    var days2 = document.getElementById('days2');
    var hours1 = document.getElementById('hours1');
    var hours2 = document.getElementById('hours2');
    var min1 = document.getElementById('min1');
    var min2 = document.getElementById('min2');
    
   
    function updateClock() {
      var t = getTimeRemaining(endtime);

      function tens (number) {
        if (toString(number.length) === 2 ) {
          return number.slice(0, 1);
        }
        return "0"
      }
   
      days1.innerHTML = ('0' + t.days).slice(1,2);
      days2.innerHTML = t.days%10;
      hours1.innerHTML = tens(t.hours);
      hours2.innerHTML = t.hours%10;
      min1.innerHTML = ('0' + t.minutes).slice(1,2);
      min2.innerHTML = t.minutes%10;
      
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 60000);
  }
   
  var deadline="October 15 2019 00:00:00 GMT+0300"; //for Ukraine
  
  initializeClock('timer', deadline);


  $(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('srcset'),
            alt = $img.attr('alt'),
            
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});