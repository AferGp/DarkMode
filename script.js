var e = document.getElementById('darkmode');
var body = document.getElementsByTagName('body')[0];
function darkMode() {
  e.classList.toggle("night");
  body.classList.toggle("dark");
}
