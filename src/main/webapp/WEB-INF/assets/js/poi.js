let save_button_pio = document.querySelector(".save_button_PIO");
let close_icon = document.querySelector(".close_icon");
const HandleSubmitAccountId = (e) => {
  e.preventDefault();
  document.querySelector(".email_you_popup").classList.add("active");
};

const HandleClosePopUp = (e) => {
  let ParentElement = e.target.closest(".popWrapper");
  ParentElement.classList.remove("active");
};

close_icon.addEventListener("click", HandleClosePopUp);

save_button_pio.addEventListener("click", HandleSubmitAccountId);
