const userButton = document.getElementById("user-button");
const loginModal = document.getElementById("login-modal");
const loginModalCloseButton = document.getElementById("login-modal-close");
const registerModal = document.getElementById("register-modal");
const registerModalCloseButton = document.getElementById(
  "register-modal-close"
);
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");
const logoutButton = document.getElementById("logout-button");
const logoutForm = document.getElementById("logout-form");

// Show login modal
if (userButton) {
  userButton.addEventListener("click", (event) => {
    loginModal.classList.remove("hidden");
  });
}

// Hide login modal
loginModalCloseButton.addEventListener("click", (event) => {
  loginModal.classList.add("hidden");
});

// Hide register modal
registerModalCloseButton.addEventListener("click", (event) => {
  registerModal.classList.add("hidden");
});

// Change from login to sign up
registerLink.addEventListener("click", (event) => {
  loginModal.classList.add("hidden");
  registerModal.classList.remove("hidden");
});

// Change from sign up to login
loginLink.addEventListener("click", (event) => {
  loginModal.classList.remove("hidden");
  registerModal.classList.add("hidden");
});

// Submit logout form
if (logoutButton) {
  logoutButton.addEventListener("click", (event) => {
    logoutForm.submit();
  });
}
// Login form submit
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const data = new URLSearchParams(formData);
  try {
    const res = await fetch("/user/login", {
      method: "POST",
      body: data,
    });
    if (res.redirected === true) {
      Swal.fire({
        title: "Welcome to NIKE",
        icon: "success",
      });
      setTimeout(() => {
        window.location.replace(res.url);
      }, 1000);
    } else {
      const resData = await res.json();
      if (resData) {
        Swal.fire({
          title: resData.message,
          icon: "error",
        });
      }
    }
  } catch(err) {
    console.log(err);
  }
});
