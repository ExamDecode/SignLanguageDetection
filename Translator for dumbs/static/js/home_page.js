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

/////  Upload Media  /////

// function displayMedia() {
//   var fileInput = document.getElementById("fileInput");
//   var selectedMedia = document.getElementById("user_uploaded_image");

//   var file = fileInput.files[0];
//   var reader = new FileReader();

//   reader.onload = function (e) {
//     selectedMedia.src = e.target.result;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     selectedMedia.src = "../static/images/user.png";
//   }
// }

function uploadMedia(type) {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = type === "video" ? "video/*" : "image/*";

  input.onchange = function () {
    var body_container_body_left_side_mediaBox = document.getElementById(
      "body_container_body_left_side_mediaBox"
    );
    var body_container_body_left_side_mediaDisplay = document.getElementById(
      "body_container_body_left_side_mediaDisplay"
    );
    var upload_media_removeBtn = document.getElementById(
      "upload_media_removeBtn"
    );
    var uploadVideoBtn = document.getElementById("uploadVideoBtn");
    var uploadImageBtn = document.getElementById("uploadImageBtn");

    var file = input.files[0];
    var fileType = file.type;

    var mediaElement;
    var media_element;
    if (fileType.includes("image")) {
      media_element = document.createElement("img");
    } else if (fileType.includes("video")) {
      mediaElement = document.createElement("video");
      mediaElement.controls = true;
    } else {
      alert("Unsupported file type.");
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      body_container_body_left_side_mediaDisplay.innerHTML = "";

      media_element.src = e.target.result;
      body_container_body_left_side_mediaDisplay.appendChild(media_element);

      // Show the remove button and hide the upload buttons
      upload_media_removeBtn.style.display = "block";
      uploadVideoBtn.style.display = "none";
      uploadImageBtn.style.display = "none";
      // Show the media box
      body_container_body_left_side_mediaBox.style.display = "block";
    };

    reader.readAsDataURL(file);

    if (file) {
      // Check video dimensions before uploading
      checkVideoDimensions(file)
        .then(() => {
          var reader = new FileReader();
          reader.onload = function (e) {
            body_container_body_left_side_mediaDisplay.innerHTML = "";

            mediaElement.src = e.target.result;
            body_container_body_left_side_mediaDisplay.appendChild(
              mediaElement
            );

            // Show the remove button and hide the upload buttons
            upload_media_removeBtn.style.display = "block";

            // bgImageBtn.style.display = "none";
            uploadVideoBtn.style.display = "none";
            uploadImageBtn.style.display = "none";

            // Show the media box
            body_container_body_left_side_mediaBox.style.display = "block";
          };

          reader.readAsDataURL(file);
        })
        .catch((error) => {
          // Handle the error (e.g., show an alert)
          alert(error);
        });
    }
  };

  input.click();
}

/////  Checking Dimensions of the Video  /////

function checkVideoDimensions(file) {
  return new Promise((resolve, reject) => {
    var video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = function () {
      if (video.videoHeight > 2500 || video.videoWidth > 2500) {
        reject(
          "Video dimensions exceed allowed limits (height: 2500px, width: 2500px) or video size is too large. It is better to upload videos less than 100MB with 16:9 aspect ratio."
        );
      } else {
        resolve();
      }
    };

    video.src = URL.createObjectURL(file);
  });
}

function submitForm() {
  // Add your logic to handle form submission here
  var image = document.getElementById("fileInput").value;
  alert("Form submitted!");

  console.log("Submitted Data:", {
    image: image,
  });
}

/////  Remove Media  /////

function removeMedia() {
  var body_container_body_left_side_mediaBox = document.getElementById(
    "body_container_body_left_side_mediaBox"
  );
  var uploadVideoBtn = document.getElementById("uploadVideoBtn");
  var uploadImageBtn = document.getElementById("uploadImageBtn");

  // Hide the remove button and show the upload buttons
  document.getElementById("upload_media_removeBtn").style.display = "none";
  uploadVideoBtn.style.display = "flex";
  uploadImageBtn.style.display = "flex";

  // Hide the media box
  body_container_body_left_side_mediaBox.style.display = "none";
}
