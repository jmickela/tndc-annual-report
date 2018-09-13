{manyNames : ["Narayan", "Payal", "Suraj"]}

/**
 * @param {string} elementSelector - A querySelector-style element selector. Eg: '#elementId', '.elementClassName', 'elementType'
 * @param {array} onVisible - An array of arrays. Each inner array's first element is a function and the the following elements are any arguments to be passed to that function. These functions will be applied when the selected element first becomes visible (scrolls onscreen).
 * @param {array} onNotVisible - An array of arrays. Each inner array's first element is a function and the the following elements are any arguments to be passed to that function. These functions will be applied when the selected element ceases to be visible (scrolls offscreen).
 */
function checkVisibility(elementSelector, onVisible, onNotVisible) {
  let inView = false;

  let fnArrays = [];
  if (arguments.length > 1) {
    for (i = 1; i < arguments.length; i++) {
      fnArrays[i - 1] = arguments[i];
    }
  } 

  
  function isScrolledIntoView(elem)
  {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  }

  $(window).scroll(function() {
    if (isScrolledIntoView(elementSelector)) {
      if (inView) { return; }
      inView = true;
      for (i = 0; i < fnArrays.length; i++){
        // console.log(fnArrays[i].slice(1));
        // console.log(fnArrays[i][0].apply(null,fnArrays[i].slice(1)));
        fnArrays[i][0].apply(null,fnArrays[i].slice(1));
      } 
    } else {
      inView = false;  
    }
  });
}




// function checkVisibility(elementSelector, optionalFunctionAndArgumentsArrays) {
//   let inView = false;

//   let fnArrays = [];
//   if (arguments.length > 1) {
//     for (i = 1; i < arguments.length; i++) {
//       fnArrays[i - 1] = arguments[i];
//     }
//   } 

  
//   function isScrolledIntoView(elem)
//   {
//     let docViewTop = $(window).scrollTop();
//     let docViewBottom = docViewTop + $(window).height();

//     let elemTop = $(elem).offset().top;
//     let elemBottom = elemTop + $(elem).height();

//     return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
//   }

//   $(window).scroll(function() {
//     if (isScrolledIntoView(elementSelector)) {
//       if (inView) { return; }
//       inView = true;
//       for (i = 0; i < fnArrays.length; i++){
//         // console.log(fnArrays[i].slice(1));
//         // console.log(fnArrays[i][0].apply(null,fnArrays[i].slice(1)));
//         fnArrays[i][0].apply(null,fnArrays[i].slice(1));
//       } 
//     } else {
//       inView = false;  
//     }
//   });
// }