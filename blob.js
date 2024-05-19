$(document).ready(function() {
    $(document).on("mousemove", function(event) {
      $(".blob").css({
        top: event.pageY - 75,
        left: event.pageX - 75
      }).addClass("show"); 
    });
  });