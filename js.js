$(window).scroll(function() {
  if ($(window).scrollTop() >= 1000 && $(window).scrollTop() <= 1250) {
    $("#play").css("background", "#C6D8EA");
  } else {
    if ($(window).scrollTop() >= 1251 && $(window).scrollTop() <= 1575) {
      $("#play").css("background", "#AAAEC1");
    } else {
      $("#play").css("background", "none");
    }
  }
});
