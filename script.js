// Tab switching
function switchTab(tab) {
  document.getElementById("formSection").classList.add("hidden");
  document.getElementById("gallerySection").classList.add("hidden");

  if (tab === "form") {
    document.getElementById("formSection").classList.remove("hidden");
  } else {
    document.getElementById("gallerySection").classList.remove("hidden");
  }
}

// Slideshow
const images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3",
];
let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("slideImage");
  img.src = images[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Form validation
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const feedback = document.getElementById("feedback");

    if (!name || !email || !password || !confirmPassword) {
      feedback.textContent = "Please fill all fields.";
      feedback.style.color = "red";
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      feedback.textContent = "Invalid email format.";
      feedback.style.color = "red";
      return;
    }

    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      return;
    }

    if (password !== confirmPassword) {
      feedback.textContent = "Passwords do not match.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = "Registration successful!";
    feedback.style.color = "green";
  });

// Keypress detection
document.addEventListener("keypress", function (e) {
  if (e.key === "s") {
    alert("You pressed 's' – S for Student!");
  }
});

// Double-click Easter egg
function showSecret() {
  const footer = document.querySelector("footer");
  footer.textContent = "🎉 You found the secret message!";
  footer.classList.add("secret");
}
