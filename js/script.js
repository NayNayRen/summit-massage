function load_script() {
  const hamburger_menu = document.querySelector(".hamburger_menu");
  const hamburger_bar_one = document.querySelector(".hamburger_bar_one");
  const hamburger_bar_two = document.querySelector(".hamburger_bar_two");
  const hamburger_bar_three = document.querySelector(".hamburger_bar_three");
  const nav_box = document.querySelector(".nav_box");

  hamburger_menu.addEventListener("click", () => {
    nav_box.classList.toggle("nav_box_display");
    hamburger_bar_one.classList.toggle("hamburger_bar_one_hide");
    hamburger_bar_two.classList.toggle("hamburger_bar_two_rotate");
    hamburger_bar_three.classList.toggle("hamburger_bar_three_rotate");
  });
}
window.load = load_script();
