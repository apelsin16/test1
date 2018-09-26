import 'bootstrap';

// import greet from './greet';

// import initHeader from './header';
import './sass/styles.scss';
import './sass/form.scss';
import certificate1 from './img/1.jpg';
import certificate2 from './img/2.jpg';
import certificate3 from './img/3.jpg';
import certificate4 from './img/4.jpg';
import certificate5 from './img/5.jpg';
import certificate6 from './img/6.jpg';
import certificate7 from './img/7.jpg';
import certificate8 from './img/8.jpg';


// initHeader();

// const img = document.createElement('img');
// img.src = tigerImage;

const img1 = document.querySelector('#img1');
img1.src = certificate1;
const img2 = document.querySelector('#img2');
img2.src = certificate2;
const img3 = document.querySelector('#img3');
img3.src = certificate3;
const img4 = document.querySelector('#img4');
img4.src = certificate4;
const img5 = document.querySelector('#img5');
img5.src = certificate5;
const img6 = document.querySelector('#img6');
img6.src = certificate6;
const img7 = document.querySelector('#img7');
img7.src = certificate7;
const img8 = document.querySelector('#img8');
img8.src = certificate8;



// greet('Webpack is awesome');


// $('#carouselExample').on('slide.bs.carousel', function (e) {

  
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 4;
//     var totalItems = $('.carousel-item').length;
    
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i=0; i<it; i++) {
//             // append slides to end
//             if (e.direction=="left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             }
//             else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });


//   $('#carouselExample').carousel({ 
//                 interval: 2000
//         });


//   $(document).ready(function() {
// /* show lightbox when clicking a thumbnail */
//     $('a.thumb').click(function(event){
//       event.preventDefault();
//       var content = $('.modal-body');
//       content.empty();
//         var title = $(this).attr("title");
//         $('.modal-title').html(title);        
//         content.html($(this).html());
//         $(".modal-profile").modal({show:true});
//     });

//   });