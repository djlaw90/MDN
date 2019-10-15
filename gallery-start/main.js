var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i <= 5; i++){
  //Sets up image sources and appends them to thumbBar
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i +'.jpg');
  thumbBar.appendChild(newImage);
  //Selects all images
  var imgs = document.querySelectorAll('img');
  //When an image is clicked, grab its src attribute
  imgs[i].onclick = function(e) {
    var imgSrc = e.target.getAttribute("src");
    //This function uses the src attribute of the clicked image and changes the current displayed image to this new image's src attribute
    var changeSrc = function(img) {
      displayedImage.setAttribute('src', imgSrc);
    }
    //Calling the new function with the new img src
    changeSrc(imgSrc);
  }
}


/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  if(btn.getAttribute('class') === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
