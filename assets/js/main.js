var height = document.body.style.height;
var overflow = document.body.style.overflow;

function closeSingleModal() {
  document.getElementById("singleModal").classList.remove("active");// = "none";
  document.body.style.height = height;
  document.body.style.overflow = overflow;
}

function closeTextModal(modal) {
  document.getElementById(modal).classList.remove("active");// = "none";
  document.body.style.height = height;
  document.body.style.overflow = overflow;
}

function openModal(image) {
  var modalImg = document.getElementById("imgContent");
  var captionText = document.getElementById("modalCaption");
  document.getElementById("singleModal").classList.add("active");// = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;

  document.body.style.height = '100%';
  document.body.style.overflow = "hidden";
  document.body.onkeyup = function() {closeModalOnKeyPress('singleModal')};
}

function openTextModal(modal) {
  document.getElementById(modal).classList.add("active");// = "block";
  height = document.body.style.height;
  overflow = document.body.style.overflow;

  document.body.style.height = '100%';
  document.body.style.overflow = "hidden";

  document.body.onkeyup = function() {closeModalOnKeyPress(modal)};
}

function closeModalOnKeyPress(modal) {
  if (event.key == "Escape") {
    if (modal == "singleModal") {
      closeSingleModal();
    } else {
      closeTextModal(modal);
    }
    document.body.onkeyup = null;
  }
}

function openMultiModal(modal) {
	document.getElementById(modal).classList.add("active");
}

function closeMultiModal(modal) {
	document.getElementById(modal).classList.remove("active");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	var allModals = document.getElementsByClassName("multiModal");
	for (var i = 0; i < allModals.length; i++) {
		if (allModals[i].classList.contains("active")) {
			var slides = allModals[i].querySelectorAll(".mySlides");
			var dots = allModals[i].querySelectorAll(".demo");
			var captionText = allModals[i].querySelectorAll(".multiModalCaption")[0];

			var j;
			if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (j = 0; j < slides.length; j++) {
		      slides[j].style.display = "none";
		  }
		  for (j = 0; j < dots.length; j++) {
		      dots[j].className = dots[j].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].classList.className += " active";
		  captionText.innerHTML = dots[slideIndex-1].alt;
		}
	}
}

/* Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    this.classList.toggle("primary");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
