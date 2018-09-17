$(document).ready(function(){
  // $('.stories__container--small').on('init', function(event, slick){
  //   console.log("initialized")
  //   setHeights('.stories__container--small');
  // });
  $('.stories__container--small').slick({
    responsive: [
      {
        breakpoint: 5000,
        settings: "unslick",
      },
      {
        breakpoint: 992,
        settings: {
          adaptiveHeight: false,
          autoplay: false,
          infinite: true,
          initialSlide: 1,
          nextArrow: $('.stories__container--small .stories__read-more'),
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
    ]
  });

  $('.stories__container--large').slick({
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    nextArrow: $('.stories__container--large .stories__read-more'),
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick",
        // settings: {
        //   variableWidth: false,
        //   slidesToShow: 1,
        //   slidesToScroll: 1
        // }
      }
    ]
  });
});


// function adjustPhotoHeight(){
//   console.log("let's adjust some photos!");
//   let ignoreClasses = ["stories__image-slide", "slick-slide", "slick-cloned"];
//   console.log("here are the ignoreClasses: " + ignoreClasses);
//   let photos = document.querySelectorAll('.stories__image-slide');
//   // console.log(photos);
//   console.log("here are the photos: " + photos);
//   for (i = 0; i < photos.length; i++) {
//     console.log("new image slide");
//     console.log("the current photo element is: "); 
//     console.log(photos[i]);
//     let list = Array.from(photos[i].classList);
//     // console.log(list);
//     for (j = 0; j < ignoreClasses.length; j++) {
//       var index = list.indexOf(ignoreClasses[j]);
//       if (index > -1) {
//         list.splice(index, 1);
//       }
//     }
//     console.log("here's the final list: " + list[0]);
//     console.log("our photo element is still: ");
//     console.log(photos[i]);
//     let photoDiv = photos[i].querySelector(".stories__image-slide__image");
//     console.log("the photo div is: ");
//     console.log(photoDiv);
//     // console.log('here it is: ' + list[0]);
//     console.log("we're trying to match: .stories__slide." + list[0] + ":not(.slick-cloned)");
//     let matchingDiv = document.querySelector(".stories__slide." + list[0] + ":not(.slick-cloned)");
//     console.log("the matching div is: ");
//     console.log(matchingDiv);
//     // console.log(matchingDiv.offsetHeight);
//     // photos[i].style.paddingTop = "300px";
//     photoDiv.style.paddingTop = matchingDiv.offsetHeight + "px";
//     console.log(photoDiv);
//   }
// }


// $(document).ready(adjustPhotoHeight);

// $(window).resize(adjustPhotoHeight);

function setHeights(optionalSelector) {
  if (typeof optionalSelector === 'undefined') {
    console.log('the optional selector is not being used');
    let stories = document.querySelectorAll('.stories__slide .stories__overlay');
    let movies = document.querySelectorAll('.stories__media-slide');
    let photos = document.querySelectorAll('.stories__image-slide__image');
  }
  else {
    console.log('the optional selector is being used');
    let stories = document.querySelectorAll('${optionalSelector} .stories__slide .stories__overlay');
    let movies = document.querySelectorAll('${optionalSelector} .stories__media-slide');
    let photos = document.querySelectorAll('${optionalSelector} .stories__image-slide__image');
  }
  

  console.log('here are the stories: ');
  console.log(stories);
  console.log('here are the movies: ');
  console.log(movies);
  console.log('here are the photos: ');
  console.log(photos);

  let max = 0;
  for(i = 0; i < stories.length; i++) {
    stories[i].style.height = 'auto';
    console.log('the height of ' + stories[i].parentElement.classList + ' is: ');
    console.log(stories[i].offsetHeight);
    if (stories[i].offsetHeight > max) {
      max = stories[i].offsetHeight;
    }
  }
  console.log("the tallest height is: " + max);
  
  for (i = 0; i < stories.length; i++) {
    stories[i].style.height = max +"px";
  }
  for (i = 0; i < movies.length; i++) {
    movies[i].style.height = max +"px";
  }
  for (i = 0; i < photos.length; i++) {
    photos[i].style.paddingTop = max +"px";
  }
  
}


// $( window ).on( 'load', setHeights());
// $( 'iframe#sg-viewport' ).on( "load", setHeights());
// $( 'iframe#sg-viewport' ).load(setHeights());
// $(document).ready(setHeights);

// $(window).resize(setHeights);