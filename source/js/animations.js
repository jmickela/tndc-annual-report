$(document).ready(function() {
  new WOW().init();

  // function addClass(selector, classes) {
  //   let target = $(selector);
  //   console.log('The target is: ');
  //   console.log(target);
  //   // console.log(target.classList);
  //   // console.log();
  //   if (target.length > 0) {
  //     if (target.length > 1) {
  //       for (j = 0; i < target.length; j++) {
  //         for (i = 1; i < arguments.length; i++) {
  //           target[j].classList.add(arguments[i]);
  //         }
  //       }
  //     } else {
  //       for (i = 1; i < arguments.length; i++) {
  //         target[0].classList.add(arguments[i]);
  //       }
  //     }
  //   } else {
  //     console.log("I'm sorry -- I couldn't find any instances of the selector '" + selector + "'");
  //   }
  // }

  // checkVisibility('.board__container .board__title', {
  //   onFirstVisible: [[addClass, '.board__container .board__title', 'slow', 'fadeIn'],[console.log, 'found it!']]
  // });
});