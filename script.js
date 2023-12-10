let password = document.querySelector("#password");
let passwordConfirm = document.querySelector(`#confirm-password`);
let submitBtn = document.querySelector("#submit-btn");
const matchingPassword = document.querySelector(".matching-passwords");
let passwordlength = document.querySelector(".password-length");
let passwordUpperCase = document.querySelector(".password-upper");
let hiddenPassword = document.querySelector(".toggle-password");

function verifyForm(event) {
  if (password.value !== passwordConfirm.value) {
    event.preventDefault();
  }
}
submitBtn.addEventListener(`click`, verifyForm);
function updatePasswordConfirmation() {
  if (passwordConfirm.value !== password.value) {
    matchingPassword.classList.add("error");
    password.classList.remove("user-valid-password");
    passwordConfirm.classList.remove("user-valid-password");
    password.classList.add("user-invalid-password");
    passwordConfirm.classList.add("user-invalid-password");
  } else {
    matchingPassword.classList.remove("error");
    password.classList.remove("user-invalid-password");
    passwordConfirm.classList.remove("user-invalid-password");
    password.classList.add("user-valid-password");
    passwordConfirm.classList.add("user-valid-password");
  }
}
passwordConfirm.addEventListener("input", updatePasswordConfirmation);

function checkPassword() {
  if (password.value.length < 8) {
    passwordlength.classList.remove("correct");
    passwordlength.classList.add("error");
  } else {
    passwordlength.classList.remove("error");
    passwordlength.classList.add("correct");
  }
  if (/[A-Z]/.test(password.value)) {
    passwordUpperCase.classList.remove("error");
    passwordUpperCase.classList.add("correct");
  } else {
    passwordUpperCase.classList.add("error");
    passwordUpperCase.classList.remove("correct");
  }
}
password.addEventListener("input", checkPassword);
