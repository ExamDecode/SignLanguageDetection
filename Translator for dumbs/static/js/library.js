/////  Menu Slider  /////

const menuButton = document.getElementById("library_menu_icon");
const slider = document.getElementById("home_page_menuSlider");
const closeBtn = document.getElementById("home_page_closeMenu");

function toggleSlider() {
  slider.style.display =
    slider.style.display === "none" || slider.style.display === ""
      ? (slider.style.left = "0")
      : "none";
}

// Event listener for the menu button
menuButton.addEventListener("click", toggleSlider);

closeBtn.addEventListener("click", function () {
  slider.style.left = "-180px";
  menuButton.style.display = "block";
});

// Event listener to close the slider if clicked outside the menu/slider area

document.addEventListener("click", function (event) {
  const isClickInsideMenu = menuButton.contains(event.target);
  const isClickInsideSlider = slider.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideSlider) {
    slider.style.left = "-180px";
    menuButton.style.display = "block";
  }
});

// The array of image URLs

const imageUrls = [
  "../static/images/a.png",
  "../static/images/b.png",
  "../static/images/c.png",
  "../static/images/d.png",
  "../static/images/e.png",
  "../static/images/f.png",
  "../static/images/g.png",
  "../static/images/h.png",
  "../static/images/i.png",
  "../static/images/j.png",
  "../static/images/k.png",
  "../static/images/l.png",
  "../static/images/m.png",
  "../static/images/n.png",
  "../static/images/o.png",
  "../static/images/p.png",
  "../static/images/q.png",
  "../static/images/r.png",
  "../static/images/s.png",
  "../static/images/t.png",
  "../static/images/u.png",
  "../static/images/v.png",
  "../static/images/w.png",
  "../static/images/x.png",
  "../static/images/y.png",
  "../static/images/z.png",
  "../static/images/0.png",
  "../static/images/1.png",
  "../static/images/2.png",
  "../static/images/3.png",
  "../static/images/4.png",
  "../static/images/5.png",
  "../static/images/6.png",
  "../static/images/7.png",
  "../static/images/8.png",
  "../static/images/9.png",
  "../static/images/10.png",

  // Add more image URLs as needed
];

const library_imageContainer = document.getElementById(
  "library_imageContainer"
);

// Populate the image container with the uploaded images
imageUrls.forEach((url) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  library_imageContainer.appendChild(imgElement);
});
