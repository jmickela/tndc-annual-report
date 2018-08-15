document.addEventListener('DOMContentLoaded', function() {
   var trigger = new ScrollTrigger({
       toggle: {
           visible: 'visible',
           hidden: 'not-visible',
       },
       once: true
   }, document.body, window);
});