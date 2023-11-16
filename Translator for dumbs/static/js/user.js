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

/////  Submit Form  /////

function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var bio = document.getElementById("bio").value;

  // Add your logic to handle form submission here

  alert("Form submitted!");

  // For demonstration purposes, log the form data to the console
  console.log("Submitted Data:", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    bio: bio,
  });
}

/////  Display Media  /////

function displayMedia() {
  var fileInput = document.getElementById("fileInput");
  var selectedMedia = document.getElementById("user_uploaded_image");

  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    selectedMedia.src = e.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    selectedMedia.src = "../static/images/user.png";
  }
}

/////  Reset Submissions  /////

function resetForm() {
  // var selectedMedia = document.getElementById("user_uploaded_image");
  // selectedMedia.src = "";
  // defaultImage.style.display = "block";
  // selectedMedia.style.display = "none";
  // document.getElementById("fileInput").value = "";
  // document.getElementById("firstName").value = "";
  // document.getElementById("lastName").value = "";
  // document.getElementById("email").value = "";
  // document.getElementById("phoneNumber").value = "";
  // document.getElementById("bio").value = "";
  // document.getElementById("user_profile_form").reset();

  document.getElementById("user_profile_form").reset();
  document.getElementById("user_uploaded_image").src =
    "../static/images/user.png";
}
