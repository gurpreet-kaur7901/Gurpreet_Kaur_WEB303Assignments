//Course: WEB303 Assignment2
//Name: Gurpreet Kaur
$(document).ready(function() {
  function loadContent(url) {
    $("#content").hide().load(url, function(response, status, xhr) {
      if (status == "error") {
        alert("Error loading content.");
      } else {
        $(this).fadeIn(200);
      }
    });
  }

  $("#prospect").click(function(event) {
    event.preventDefault();
    loadContent("prospect.html");
  });

  $("#convert").click(function(event) {
    event.preventDefault();
    loadContent("convert.html");
  });

  $("#retain").click(function(event) {
    event.preventDefault();
    loadContent("retain.html");
  });
});