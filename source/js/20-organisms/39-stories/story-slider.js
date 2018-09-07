$(document).ready(function(){
  $('.stories__container').slick({
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    nextArrow: $('.stories__read-more'),
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
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