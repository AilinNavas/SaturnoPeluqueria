window.sr = ScrollReveal();

sr.reveal('.navbar', {
 duration: 600,
 origin: 'bottom',
 distance: '100px'
});

sr.reveal('.carrousel', {
    duration: 600,
    origin: 'bottom',
    distance: '100px'
   });

   sr.reveal('.about-image', {
    duration: 2000,
    origin: 'left',
    distance: '400px',
   });

   sr.reveal('.about-content', {
    duration: 2000,
    origin: 'right',
    distance: '400px'
   });

   sr.reveal('.main-accordion', {
    duration: 800,
    origin: 'left',
    distance: '200px'
   });
   
   sr.clean('.map');