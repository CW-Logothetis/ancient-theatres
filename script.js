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
  // as the above turns off display of all tabs, this sets History to load
  document.getElementById("default-open").click();

// -----------------------------------------------------------------------------
// -------------                Photo Gallery           ------------------------
// -----------------------------------------------------------------------------

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
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}