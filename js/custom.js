// Aos
AOS.init();

setTimeout(() => {
  $(".loading").fadeOut(1000);
}, 1000);

window.onload = function () {
  setTimeout(() => {
    $(".header-pages").addClass("active");
  }, 500);
};

lightGallery(document.getElementById("lightgallery"), {
  thumbnail: true,
  selector: ".image-item",
});


$(".text-ask-aboutus ul li h2").click(function (e) {
  e.preventDefault();
  $(this).next().slideToggle(300);
  $(this).parent().toggleClass("active");
});

// start sldier services

if ($("#slider-hero").length) {
  $("#slider-hero").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
}

if ($("#slider-client").length) {
  $("#slider-client").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
}


 
  $("#contactSlider").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,   
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    responsive: {
      0: {
         items: 1 
      },      
    }
  });


  $(".retreatSlider").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,   
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    responsive: {
      0: {
         items: 1 
      },      
    }
  });
  


if ($("#slider-customer").length) {
  $("#slider-customer").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 3,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: true,
    
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
}



$(".remove_mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
});

function open() {
  $(".navicon").addClass("is-active");
  $("#menu-div").addClass("active");
  $("#times-ican").addClass("active");
  $(".bg_menu").addClass("active");
}

function close() {
  $(".navicon").removeClass("is-active");
  $("#menu-div").removeClass("active");
  $("#times-ican").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".all-categories").removeClass("active");
  $(".btn-all-categories").removeClass("active");
  $(".show-categories").removeClass("active");

  $(".remove-mune").click(function () {
    $("#menu-div").removeClass("active");
    $(".bg_menu").removeClass("active");
    $(".times-ican").removeClass("active");
  });
}

$("#times-ican").click(function () {
  if ($(this).hasClass("active")) {
    close();
  } else {
    open();
  }
});

$(".btns_menu_responsive").click(function (e) {
  close();
});

$(".remove-mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".times-ican").removeClass("active");
  $(".navicon").removeClass("is-active");
});

$("#menu-div a").click(function () {
  e.preventDefault();
});

var $winl = $(window); // or $box parent container
var $boxl = $("#menu-div, #times-ican");
$winl.on("click.Bst", function (event) {
  if (
    $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
    !$boxl.is(event.target) //checks if the $box itself was clicked
  ) {
    close();
  }
});




const counters = document.querySelectorAll(".counter-header");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});




if ($(".counter").length) {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $(".counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2550,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            },
            complete: function () {
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });

  const animationDuration = 4000;

  const frameDuration = 1000 / 60;

  const totalFrames = Math.round(animationDuration / frameDuration);

  const easeOutQuad = (t) => t * (2 - t);

  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
      frame++;

      const progress = easeOutQuad(frame / totalFrames);

      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  const countupEls = document.querySelectorAll(".timer");
  countupEls.forEach(animateCountUp);

  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      2100
    );
    $(this).text($(this).attr("data-progress") + "%");
  });
}



AOS.init(
  {
    once: true
  }
);


//  user image change
const fileInputs = document.querySelectorAll(
    ".upload__img__container .add__photo input"
  );
  const selectedImages = document.querySelectorAll(
    ".upload__img__container .add__photo img"
  );
  
  if(fileInputs){
        fileInputs.forEach((input, index) => {
          input.addEventListener("change", function (event) {
            const file = event.target.files[0];
        
            if (file && file.type.startsWith("image/")) {
              selectedImages[index].src = URL.createObjectURL(file);
            }
          });
        });
  }


  // user choose time 
  const timeInputs = document.querySelectorAll('.timeInput');
  const placeholders = document.querySelectorAll('.time-placeholder');

  const dateInputs = document.querySelectorAll('.arrive__card input');
  const datePlaceHolders = document.querySelectorAll(".date-placeholder")
    
  if (timeInputs) {
    timeInputs.forEach((input, index) => {
      const placeholder = placeholders[index]; 
  
      input.addEventListener('focus', function () {
        if (input.showPicker) {
          input.showPicker(); 
        }
      });
  
      input.addEventListener('input', function () {
        if (input.value) {
          placeholder.style.opacity = '0'; 
          placeholder.style.visibility = 'hidden';
        } else {
          placeholder.style.opacity = '1'; 
          placeholder.style.visibility = 'visible';
        }
      });
    });

    placeholders.forEach((span, index) => {
      span.addEventListener('click', (e) => {
        if (input[index].showPicker) {
          input[index].showPicker(); 
        }
      })
    })
  }



if (dateInputs.length === datePlaceHolders.length) {
  dateInputs.forEach((input, index) => {
    const placeholder = datePlaceHolders[index];
    
    input.addEventListener('focus', function () {
      if (input.showPicker) {
        input.showPicker();
      }
    });
    
    input.addEventListener('input', function () {
      if (input.value) {
        placeholder.style.opacity = '0';
        placeholder.style.visibility = 'hidden';
      } else {
        placeholder.style.opacity = '1';
        placeholder.style.visibility = 'visible';
      }
    });
  });
} else {
  console.warn('Mismatch between number of date inputs and placeholders.');
}


  // user upload permission file
  const inputFile = document.getElementById("inputpermission");
  const inputFilePlaceHolder = document.querySelector('.file-placeholder');
  const fileNameTetx = document.querySelector('.file__name');
  const fileSize = document.querySelector('.file__size');

  if(inputFile){
    inputFile.addEventListener("change", (e) => {
      const fileName = e.target.files[0]?.name;  
      const size = e.target.files[0]?.size;  
      if (fileName) {
        if(inputFilePlaceHolder){
          inputFilePlaceHolder.textContent = fileName;
        } 

        if(fileNameTetx){
          fileNameTetx.textContent = fileName;
          fileSize.textContent = `${(size / (1024 * 1024)).toFixed(2)} MB`;
        }
      }
    })
  }

//  user make rating

const allRating = document.querySelectorAll('.add-rating .input label');

if(allRating){
  allRating.forEach((item, index) => {
      item.addEventListener("click", (e) => {
          allRating.forEach((icon, iconIndex) => {
              if(iconIndex <= index){
                icon.classList.add("active")
              }else{
                icon.classList.remove("active")
              }
          })
      })
  })
}
  