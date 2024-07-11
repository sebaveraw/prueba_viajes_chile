$(document).ready(function () {
  var $root = $("html, body");
  $('a[href^="#"]').click(function () {
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 100,
      },
      500
    );
    return false;
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  $(function () {
    $(window).scroll(function () {
      var navegador = $(".navbar");
      if ($(this).scrollTop() > 100) {
        navegador.css("background", "#5AC8EC");
      } else {
        navegador.css("background", "none");
      }
    });
  });
  $(".card").hover(
    function () {
      var cardChange = $(this); // caching $(this)
      cardChange.css("color", "black");
    },
    function () {
      var cardChange = $(this); // caching $(this)
      cardChange.css("color", "black");
    }
  );
  $(".card1")
    .mouseover(function () {
      $(".card1txt").css("color", "#000000");
    })
    .mouseleave(function () {
      $(".card1txt").css("color", "#ffffff");
    });
  $(".card2")
    .mouseover(function () {
      $(".card2txt").css("color", "#000000");
    })
    .mouseleave(function () {
      $(".card2txt").css("color", "#ffffff");
    });
  $(".card3")
    .mouseover(function () {
      $(".card3txt").css("color", "#000000");
    })
    .mouseleave(function () {
      $(".card3txt").css("color", "#ffffff");
    });
  $(".card4")
    .mouseover(function () {
      $(".card4txt").css("color", "#000000");
    })
    .mouseleave(function () {
      $(".card4txt").css("color", "#ffffff");
    });
});
