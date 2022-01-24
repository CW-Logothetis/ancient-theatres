const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 

// -----------------------------------------------------------------------------
// -------------                Theatre Tabs            ------------------------
// -----------------------------------------------------------------------------

 // on load, no tab will be open. This 'clicks' the History tab so it opens as default tab
 document.getElementById("default-open").click();

  function openTab(evt, tabName) {
    // Declare all variables
    let tabcontent, tablinks;
  
    // Get all the tab content elements via class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all the tabs via class="tablinks" and remove the class for styling them as "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Having hid all the tabs' content above, show the tab just clicked 
    document.getElementById(tabName).style.display = "block";

    //and add an "active" class to style the tab
    evt.currentTarget.className += " active";
  }
 

// -----------------------------------------------------------------------------
// -------------                Photo Gallery           ------------------------
// -----------------------------------------------------------------------------

// fn showSlides runs on load, so shows slide 1 (slideIndex=1)
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
 
  let slides = document.getElementsByClassName("photographs");
  let thumb = document.getElementsByClassName("thumbnail");
  let captionText = document.getElementById("caption");
  //last slide, index back to 1
  if (n > slides.length) {slideIndex = 1}
  console.log(`slideIndex: ${slideIndex}`)
  //go left to minus index, slide is last slide
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumb[slideIndex-1].className += " active";
  captionText.innerHTML = thumb[slideIndex-1].alt;
}