/**
 * @param {string} elementSelector - A querySelector-style element selector. Eg: '#elementId', '.elementClassName', 'elementType'
 * @param {Object} functions - The object that holds the arguments for the function.
 * @param {array} functions.onFirstVisible - An array of arrays. Each inner array's first element is a function and the the following elements are any arguments to be passed to that function. These functions will be applied the first time the selected element becomes visible (scrolls onscreen).
 * @param {array} functions.onEveryVisible - An array of arrays. Each inner array's first element is a function and the the following elements are any arguments to be passed to that function. These functions will be applied every the selected element becomes visible (scrolls onscreen).
 * @param {array} functions.onNotVisible - An array of arrays. Each inner array's first element is a function and the the following elements are any arguments to be passed to that function. These functions will be applied when the selected element ceases to be visible (scrolls offscreen).
 */
function checkVisibility(elementSelector, functions) {

  let onFirstVisible = (functions.onFirstVisible === undefined) ? [] : functions.onFirstVisible;
  let onEveryVisible = (functions.onEveryVisible === undefined) ? [] : functions.onEveryVisible;
  let onNotVisible = (functions.onNotVisible === undefined) ? [] : functions.onNotVisible;

  // console.log('elementSelector: ');
  // console.log(elementSelector);
  // console.log('onFirstVisible: ');
  // console.log(onFirstVisible);
  // console.log('onEveryVisible: ');
  // console.log(onEveryVisible);
  // console.log('onNotVisible: ');
  // console.log(onNotVisible);

  let inView = false;
  let everInView = false;

  // let fnArrays = [];
  // if (arguments.length > 1) {
  //   for (i = 1; i < arguments.length; i++) {
  //     fnArrays[i - 1] = arguments[i];
  //   }
  // } 

  
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
      // if it's been visible and is still visible, don't do anything
      if (inView) { 
        return; 
      }
      inView = true;
      // if it has never been visible before do the firstTime stuff
      if (!everInView) {
        // console.log('This is the first time I\'ve seen you around here!');
        everInView = true;
        for (i = 0; i < onFirstVisible.length; i++){
          // console.log(onFirstVisible[i].slice(1));
          // console.log(onFirstVisible[i][0].apply(null,fnArrays[i].slice(1)));
          onFirstVisible[i][0].apply(null,onFirstVisible[i].slice(1));
        } 
      } 
      // if it's been visible before and is visible again, do the everyTime stuff
      else {
        // console.log('Nice seeing you again!');
        for (i = 0; i < onEveryVisible.length; i++){
          // console.log(onEveryVisible[i].slice(1));
          // console.log(onEveryVisible[i][0].apply(null,fnArrays[i].slice(1)));
          onEveryVisible[i][0].apply(null,onEveryVisible[i].slice(1));
        } 
      }
    } else {
      if (inView) {
        // console.log('See you later!');
        for (i = 0; i < onNotVisible.length; i++){
          // console.log(onNotVisible[i].slice(1));
          // console.log(onNotVisible[i][0].apply(null,fnArrays[i].slice(1)));
          onNotVisible[i][0].apply(null,onNotVisible[i].slice(1));
        } 
      }
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