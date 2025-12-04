function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

l

// read more , read less //
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

var i = 0;
var txt = 'Welcome to Auto Bistro.....'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


Splitting();
$('.signup').submit(function (event) {
  event.preventDefault();
  $("#wrap").addClass("plunge");
  var emailText = $('.email').val();
  $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
  // Splitting();
  setTimeout(function () {
    $('.email').val('');
    $(".field p").remove();
    $("#wrap").removeClass("plunge");
  }, 4000);
});


// quote //

function splitWords() {
  let quote = document.querySelector("blockquote q");
  quote.innerText.replace(/(<([^>]+)>)/ig, "");
  quotewords = quote.innerText.split(" "),
    wordCount = quotewords.length;
  quote.innerHTML = "";
  for (let i = 0; i < wordCount; i++) {
    quote.innerHTML += "<span>" + quotewords[i] + "</span>";
    if (i < quotewords.length - 1) {
      quote.innerHTML += " ";
    }
  }
  quotewords = document.querySelectorAll("blockquote q span");
  fadeWords(quotewords);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
  Array.prototype.forEach.call(quotewords, function (word) {
    let animate = word.animate([{
      opacity: 0,
      filter: "blur(" + getRandom(2, 5) + "px)"
    }, {
      opacity: 1,
      filter: "blur(0px)"
    }],
      {
        duration: 1000,
        delay: getRandom(500, 3300),
        fill: 'forwards'
      }
    )
  })
}


splitWords();
let animate = word.animate(
  [
    {
      opacity: 0,
      filter: "blur(" + getRandom(2, 5) + "px)",
    },
    {
      opacity: 1,
      filter: "blur(0px)",
    },
  ],
  {
    duration: 1000,
    delay: getRandom(500, 3300),
    fill: 'forwards',
    easing: 'linear', // Add this line with the timing function
  }
);


// Search bar //

function searchToggle(obj, evt) {
  var container = $(obj).closest('.search-wrapper');
  if (!container.hasClass('active')) {
    container.addClass('active');
    evt.preventDefault();
  }
  else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
  }
}

// Search Bar ends //

// EB //
$(document).ready(function () {
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage)
      .removeClass("inactive")
      .addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function () {
      scrolling = false;
    }, animTime);
  }

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  }

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  }

  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  $(document).on("keydown", function (e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });
});

///////////////////////////////


