$(window).load(function() {
  $("#play").addClass("animated fadeInUp");

  setTimeout(function() {
    $("section.sec.sec1")
      .show()
      .addClass("animated fadeInUp");
  }, 500);

  setTimeout(function() {
    $("section.sec.sec2")
      .show()
      .addClass("animated fadeInUp");
  }, 650);

  setTimeout(function() {
    $("section.sec.sec3")
      .show()
      .addClass("animated fadeInUp");
  }, 800);

  setTimeout(function() {
    $("section.sec.sec4")
      .show()
      .addClass("animated fadeInUp");
  }, 950);

  setTimeout(function() {
    $("footer")
      .show()
      .addClass("animated fadeInUp");
  }, 1100);

  setTimeout(function() {
    $("#home")
      .show()
      .addClass("animated fadeInDown");

    setTimeout(function() {
      $("#about")
        .show()
        .addClass("animated fadeInDown");
    }, 200);

    setTimeout(function() {
      $("#offers")
        .show()
        .addClass("animated fadeInDown");
    }, 400);

    setTimeout(function() {
      $("#news")
        .show()
        .addClass("animated fadeInDown");
    }, 500);

    setTimeout(function() {
      $("#contacts")
        .show()
        .addClass("animated fadeInDown");
    }, 600);
  }, 700);
});
