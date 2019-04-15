function goIG() {
    url = "https://www.instagram.com/steven____daniel/?hl=en";
    window.open(url);
}

function goFB() {
    url = "https://www.facebook.com/steven.chung.9041";
    window.open(url);
}

function goLI() {
    url = "https://www.linkedin.com/in/steven-chung-4174b9179/";
    window.open(url);
}

// function hamburgerFunction(x) {
//   x.classList.toggle("change");
// }

function hamburgerFunction(x) {
  // x.classList.toggle("change");
  document.getElementById("links").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.hamburger')) {
  var links = document.getElementById("links");
    if (links.classList.contains('show')) {
        links.classList.remove('show');
        links.classList.toggle('change');
    }
  }
}
