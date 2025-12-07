let menu = document.getElementById("bars");

menu.addEventListener("click", () => {
  document.getElementById("Sidemenu").classList.remove("hidden");

  document.getElementById("Sidemenu").classList.add("fixed");
});
