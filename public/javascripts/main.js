var changeImage = function() {
  var image = document.getElementById('image');
  image.src = "../images/garden-party-animal-dog";
}

$(document).on('click', 'h1', function(){
  $(this).fadeOut("fast");
  $(this).fadeIn('slow');
});
