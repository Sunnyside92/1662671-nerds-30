const contactLink = document.querySelector(".contact-link");
const appointmentPopup = document.querySelector(".modal");
const appointmentClose = appointmentPopup.querySelector(".modal-close");
const appointmentForm = appointmentPopup.querySelector(".appointment-form");
const appointmentName = appointmentPopup.querySelector(".user-name");
const appointmentEmail = appointmentPopup.querySelector(".user-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("Email");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  appointmentPopup.classList.add("modal-show");

  if (storage) {
    appointmentName.value = storage;
    appointmentEmail.focus();
  }
});

appointmentClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  appointmentPopup.classList.remove("modal-show");
  appointmentPopup.classList.remove("modal-error");
});

appointmentForm.addEventListener("submit", function (evt) {
  if (!appointmentName.value || !appointmentEmail.value) {
  evt.preventDefault();
  appointmentPopup.classList.remove("modal-error");
  appointmentPopup.offsetWidth = appointmentPopup.offsetWidth;
  appointmentPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("Email", appointmentEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (appointmentPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      appointmentPopup.classList.remove("modal-show");
      appointmentPopup.classList.remove("modal-error");
    }
  }
});
