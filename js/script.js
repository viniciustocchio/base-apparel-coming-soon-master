const button = document.querySelector("[data-button");
const input = document.querySelector("[data-input]");
const error = document.querySelector(".error");

function handleSubmit(event) {
  const target = event.target;
  console.log(target.value);
  if (!target.checkValidity()) {
    target.classList.add("invalid");
    error.classList.add("active");
    // target.setCustomValidity("Please provide a valid email");
    target.nextElementSibling.innerHTML = "Please provide a valid email";
  } else {
    target.classList.remove("invalid");
    error.classList.remove("active");
    target.nextElementSibling.innerHTML = "";
    event.preventDefault();
  }
}

input.addEventListener("change", handleSubmit);