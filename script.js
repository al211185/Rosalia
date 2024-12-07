$(document).ready(function() {
  $("#burger_icon, .auto_close").click(function() {

    $("body").toggleClass("no_scroll");
    $(".nav3").toggleClass("show");
    $("#burger_icon").toggleClass("open");

    $("#menu_list").click(function() {
      $("#menu_list").toggleClass("show");
      $("#open_menu").toggleClass("hide");
    });
  });
});

document.querySelectorAll('a[href*="000webhost"]').forEach(e => e.remove());
  

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute('tema', 'dark');
    document.getElementById("imgid").src="images/R_Logo-1.png";
  } else {
    document.documentElement.setAttribute('tema', 'light');
    document.getElementById("imgid").src="images/R_Logo.webp";
  }
}
colorSwitch.addEventListener('change', cambiaTema);

