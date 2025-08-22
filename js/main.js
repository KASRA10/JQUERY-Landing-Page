$(window).on("load", function () {
  setTimeout(hidePreload, 3000);
});

$(document).ready(function () {});

// Functions
function hidePreload() {
  $("#preLoader").delay(300).fadeOut("slow");
}
// End Of Functions
