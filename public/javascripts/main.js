// function changeImage(){
//   console.log("hi");
//   var image = document.getElementById('image');
//   image.src = "../images/garden-party-animal-dog.jpg";
//   $('.par').addClass(changeText);
// }

$(document).on('click', 'h1', function(){
  console.log("hello");
  $(this).fadeOut("fast");
  $(this).fadeIn('slow');
});


