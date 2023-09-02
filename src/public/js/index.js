window.sr = ScrollReveal();

sr.reveal('.navbar', {
 duration: 5000,
 origin: 'bottom',
 distance: '-100px'
});

sr.reveal('.carrousel', {
    duration: 5000,
    origin: 'bottom',
    distance: '-100px'
   });

   sr.reveal('.about-image', {
    delay: 2000,
    duration: 4000,
    origin: 'left',
    distance: '800px',
   });

   sr.reveal('.about-content', {
    delay: 2000,
    duration: 4000,
    origin: 'right',
    distance: '800px'
   });

   sr.reveal('.main-accordion', {
    delay: 1000,
    duration: 4000,
    origin: 'left',
    distance: '1000px'
   });
   
   sr.clean('.map');