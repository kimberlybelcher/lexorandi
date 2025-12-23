$(document).ready(function () {

  // Load the sponsors dynamically
  $("#sponsors").load("sponsors.html", function () {
    console.log("Sponsors loaded.");
  });

  // Load the footer dynamically
  $("#footer").load("footer.html", function () {
    console.log("Footer loaded.");
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Load the sponsors dynamically
  $("#jumbotron").load("jumbotron.html", function () {
    console.log("Jumbotron loaded.");
  });

  // Scroll to top ---------------------------------------------------------------
  window.onscroll = function () {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  };

  $('#back-to-top').on("click", function (event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

  // Link to elements with data-url attributes ------------------------------------------
  $(document).on("click", "[data-url]", function () {
    // let url = $(this).data("url");
    // window.location.href = url;
    window.open($(this).attr("data-url"), $(this).attr('data-target'));
  });


  // FAQ Expander section -- open all accordion panels for possible printing or close ---
  $(".expander").on("click", function () {

    if ($(".expander").text() === "Expand panels") {

      // Change the button text
      $(".expander").text("Collapse panels");
      // show all accordions
      $("#wrapper .collapse").collapse('show');
      // $(".btn").prev().find("i").addClass("fa-rotate-45");

    } else {
      // Change the button text
      $(".expander").text("Expand panels");
      // hide all accordions
      $("#wrapper .collapse").collapse('hide');
      // $(".btn").prev().find("i").removeClass("fa-rotate-45");
    }
  });


  // plus/minus toggler on opening/closing the accordions
  $(".btn-link").on("click", function () {
    // alert($(this).prev().find("i").text());
    if ($(this).prev().find("i").hasClass("fa-plus") && $(this).prev().find("i").hasClass("fa-rotate-45")) {
      $(this).prev().find("i").removeClass("fa-rotate-45");
    } else {
      $(this).prev().find("i").addClass("fa-rotate-45");
    }

  });

  // Time in South Bend -- thanks to Rob Parham @pamblam (Github)
  $("#south-bend-time").remoteTime({
    key: "",
    location: "South Bend, Indiana",
    format: "g:i:s a"
  });


  // translation icons ----------------------------------------------
  $(".flags span").on("click", function () {
    var flagClicked = $(this).data("language");

    if (flagClicked == "english") {
      // reduce opacity on French and German flags
      $(this).removeClass("opacity-half");
      $(this).next().addClass("opacity-half");
      $(this).next().next().addClass("opacity-half");
      // show the English version and hide the French version
      $(document).find(".french-version").addClass("d-none");
      $(document).find(".german-version").addClass("d-none");
      $(document).find(".english-version").removeClass("d-none");

    } else if (flagClicked == "german") {
      // reduce opacity on English and French flags
      $(this).removeClass("opacity-half");
      $(this).prev().addClass("opacity-half");
      $(this).prev().prev().addClass("opacity-half");

      // hide the English and French version and show the German version
      $(document).find(".german-version").removeClass("d-none");
      $(document).find(".english-version").addClass("d-none");
      $(document).find(".french-version").addClass("d-none");

    } else { // flag clicked = french
      // reduce opacity on English and German flags
      $(this).removeClass("opacity-half");
      $(this).prev().addClass("opacity-half");
      $(this).next().addClass("opacity-half");

      // hide the English and German versions and show the French version
      $(document).find(".german-version").addClass("d-none");
      $(document).find(".english-version").addClass("d-none");
      $(document).find(".french-version").removeClass("d-none");
    }

  });

  $(".keynote-expander").on("click", function () {
    $(this).parent().next().stop().slideToggle();
  });

});
// document.ready
