$(window).on("load", function () {
  setTimeout(function () {
    hidePreload();

    $(".videoTextContent").animate({ opacity: 1 }, 5000);
  }, 3000);
});

$(document).ready(function () {});

// Functions
function hidePreload() {
  $("#preLoader").delay(300).fadeOut("slow");
}
// End Of Functions
