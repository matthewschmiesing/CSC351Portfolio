let backToTopButton = document.getElementById("backTop");//defines the button, i dont know if this is actually needed

function backToTop() {
    document.body.scrollTop = 0; // For Safari according to W3 Schools
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera according to W3 Schools
  }