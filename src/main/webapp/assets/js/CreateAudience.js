import { Values } from "./Values.js";
const ORButton = document.querySelector(".or_button button");

let CalculateButton = document.querySelector(".calculate_button");
let SaveAudButton = document.querySelector(".save_aud");
let CloseIcon = document.querySelector(".close_icon");

let SaveButon = document.querySelector(".save_button_account");
let Step = 1;

const CategorySelector = document.querySelectorAll(".category_selection");
let Category = ["Category", "City", "Area", "POI", "Budget", "Durations"];

let CurrentActiveCategory = "";
let LatestSelect;

const HandleSelectorValue = (e) => {
  let Value = e.target.value;
  if (Value != "") {
    ORButton.removeAttribute("disabled");
  } else {
    ORButton.setAttribute("disabled", true);
  }
  LatestSelect = e.target;
  CurrentActiveCategory = Value;
  let SubValues = e.target
    .closest(".row_custom")
    .querySelector(".select_right_wrapper");
  let SelectValue = e.target
    .closest(".row_custom")
    .querySelector(".select_right_wrapper .form-select");

  let DeselectValue = SubValues.querySelector(".dselect-items");
  DeselectValue.innerHTML = "";
  SelectValue.innerHTML = "";

  Values[Value].forEach((EachValue) => {
    DeselectValue.insertAdjacentHTML(
      "beforeend",
      `<button class="dropdown-item" data-dselect-value=${EachValue} type="button" onclick="dselectUpdate(this, 'dselect-wrapper', 'form-select')">${EachValue}</button>`
    );

    SelectValue.insertAdjacentHTML(
      "beforeend",
      `<option value=${EachValue}>${EachValue}</option>`
    );
  });
};

const HandleWorking = (e) => {
  let Filter = Category.filter(
    (EachCategory) => EachCategory != CurrentActiveCategory
  );
  ORButton.setAttribute("disabled", true);
  let LatestSelect = e.target
    .closest(".group_wrapper")
    .querySelector(".body_area > *:last-child > *:nth-child(2) select");

  LatestSelect.setAttribute("disabled", true);

  Category = Filter;

  Step++;
  let HTML = `
  <div class="row_custom">
  <div class="or_select">
    <select class="form-select">
      <option value="OR">OR</option>
      <option value="AND">AND</option>
    </select>
  </div>
 
  <div>
    <select class="form-select category_selection" id=>
      <option value="">Select Category</option>
      ${Category.map(
        (EachCategory) =>
          `<option value=${EachCategory}>${EachCategory}</option>`
      )}
    </select>
  </div>
  <div>
    <select class="form-select" >
      <option value=${`Is ${Step}`}>Is</option>
      <option value=${`Is Not ${Step}`}>Is Not</option>
     
    </select>
  </div>  


  <div class="select_right_wrapper">
    <select class="form-select sub_values" id="example-area-${Step}" multiple>

    </select>
  </div>  



 

</div>
    `;

  document
    .querySelector(".group_wrapper .body_area")
    .insertAdjacentHTML("beforeend", HTML);

  dselect(document.querySelector(`#example-area-${Step}`));
  const CategorySelector = document.querySelectorAll(".category_selection");
  CategorySelector.forEach((EachCategory) => {
    EachCategory.addEventListener("change", HandleSelectorValue);
  });

  // let DeleteIcons = document.querySelectorAll(".row_custom .icon_wrapper");
  // DeleteIcons.forEach((EachIcon) => {
  //   EachIcon.addEventListener("click", HandleDeletingRows);
  // });
};

const HandleDeletingRows = (e) => {
  let ParentElement = e.target.closest(".row_custom");

  ParentElement.remove();
};
const HandleCalulating = (e) => {
  document.querySelector(".loader").classList.add("active");
  setTimeout(() => {
    document.querySelector(".answer").classList.add("active");
    document.querySelector(".loader").classList.remove("active");
  }, 5000);
};

const HandlePopUp = (e) => {
  document.querySelector(".email_you_popup").classList.add("active");
};
const ClosePopUp = (e) => {
  document.querySelector(".email_you_popup").classList.remove("active");
};

CategorySelector.forEach((EachCategory) => {
  EachCategory.addEventListener("change", HandleSelectorValue);
});

CloseIcon.addEventListener("click", ClosePopUp);
SaveAudButton.addEventListener("click", HandlePopUp);

SaveButon.addEventListener("click", ClosePopUp);
SaveButon.addEventListener("click", ClosePopUp);

CalculateButton.addEventListener("click", HandleCalulating);
ORButton.addEventListener("click", HandleWorking);
