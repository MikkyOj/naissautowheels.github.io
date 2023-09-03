// the javascript

// to change color theme
let isLight = true;
function changeTheme() {
  const lightTheme = () => {
    const logo = document.getElementById("logo");
    const moon = document.getElementById("moon");
    moon.style.display="inline-block";
    const sun = document.getElementById("sun");
    sun.style.display="none";
    logo.setAttribute("src", "images/logo-light.png");
    // color choices for light theme
    const root = document.documentElement;
    root.style.setProperty("--bg-main", "#f2f2f2");
    root.style.setProperty("--bg-secondary", "#cecece");
    root.style.setProperty("--bg-thrd", "#fff");
    root.style.setProperty("--text-main", "#111");
    root.style.setProperty("--text-secondary", "#232");
    root.style.setProperty("--title", "#3333e2");
  };
  // color choices for dark theme
  const darkTheme = () => {
    const logo = document.getElementById("logo");
    const sun = document.getElementById("sun");
    sun.style.display="inline-block";
    const moon = document.getElementById("moon");
    moon.style.display="none";
    logo.setAttribute("src", "images/logo-dark.png")
    const root = document.documentElement;
    root.style.setProperty("--bg-main", "#000");
    root.style.setProperty("--bg-thrd", "#111");
    root.style.setProperty("--bg-secondary", "#222");
    root.style.setProperty("--text-main", "#fff");
    root.style.setProperty("--text-secondary", "#ddd");
    root.style.setProperty("--title", "#13bddd");
  };

  if (isLight) {
    darkTheme(); // if light,. chnage to dark
    isLight = false; // update the checker
    console.log(logo)
   } else {
    lightTheme();
    isLight = true;
    console.log(logo)
   }
}
// to toggle the menu
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
let isOpen = false;

btn.addEventListener("click", () => {
  if (isOpen === false) {
    btn.setAttribute("aria-expanded", "true");
    nav.style.right = "-20px";
    isOpen = true;
  } else {
    btn.setAttribute("aria-expanded", "false");
    nav.style.right = "-125vw";
    isOpen = false;
  }
});
