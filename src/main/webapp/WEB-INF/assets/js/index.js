import { DashboardData } from "./DashboardData.js";

let SearchInput = document.querySelector("#searchinput");
let close_icon = document.querySelectorAll(".close_icon");
let email_you_popup = document.querySelector(".email_you_popup");
let save_button_account = document.querySelector(".save_button_account");

const HandleCheckboxWorking = (e) => {
  let AllInputs = document.querySelectorAll("table tbody input");
  let Checked = false;

  AllInputs.forEach((EachInput) => {
    if (EachInput.checked) {
      Checked = true;
    }
  });

  if (Checked == true) {
    document.querySelector(".active_button").classList.add("active");
  } else {
    document.querySelector(".active_button").classList.remove("active");
  }
};

const SearchData = (e) => {
  let InputVal = e.target.value.toLowerCase();

  document.querySelector("table tbody").innerHTML = "";

  DashboardData.forEach((EachData) => {
    let LowerArea = EachData.area.toLowerCase();
    if (LowerArea.includes(InputVal)) {
      let HTML = `
            <tr>
            <td width="35%">
              <input type="checkbox" />
              <p>${EachData.area}</p>
            </td>
            <td>${EachData.subc}</td>
        
            <td>${EachData.count}</td>
        
            <td width="25%" class="button_td">
            <button class="facebook">Facebook</button>
            <button class="mail">Send Mail</button>
            </td>
          </tr>
            `;
      document
        .querySelector("table tbody")
        .insertAdjacentHTML("beforeend", HTML);
    }
  });

  let AllInputs = document.querySelectorAll("table tbody input");

  AllInputs.forEach((EachInput) => {
    EachInput.addEventListener("change", HandleCheckboxWorking);
  });

  let FaceBookbuttons = document.querySelectorAll(".facebook");
  FaceBookbuttons.forEach((EachButton) => {
    EachButton.addEventListener("click", HandlePopUP);
  });

  let Mail = document.querySelectorAll(".mail");

  Mail.forEach((EachButton) => {
    EachButton.addEventListener("click", HandleSubmitAccountId);
  });
};

DashboardData.forEach((EachData) => {
  let HTML = `
    <tr>
    <td width="35%">
      <input type="checkbox" />
      <p>${EachData.area}</p>
    </td>
    <td>${EachData.subc}</td>

    <td>${EachData.count}</td>

    <td width="25%" class="button_td">
    <button class="facebook">Facebook</button>
    <button class="mail">Send Mail</button>
    </td>
  </tr>
    `;
  document.querySelector("table tbody").insertAdjacentHTML("beforeend", HTML);
});

let AllInputs = document.querySelectorAll("table tbody input");

const HandlePopUP = (e) => {
  document.querySelector(".account_id_popup").classList.add("active");
};
const HandleClosePopUp = (e) => {
  let ParentElement = e.target.closest(".popWrapper");
  ParentElement.classList.remove("active");
};

const HandleSubmitAccountId = (e) => {
  e.preventDefault();

  email_you_popup.classList.add("active");
};

let FaceBookbuttons = document.querySelectorAll(".facebook");

save_button_account.addEventListener("click", HandleClosePopUp);
let Mail = document.querySelectorAll(".mail");

Mail.forEach((EachButton) => {
  EachButton.addEventListener("click", HandleSubmitAccountId);
});
close_icon.forEach((EachButton) => {
  EachButton.addEventListener("click", HandleClosePopUp);
});
FaceBookbuttons.forEach((EachButton) => {
  EachButton.addEventListener("click", HandlePopUP);
});

AllInputs.forEach((EachInput) => {
  EachInput.addEventListener("change", HandleCheckboxWorking);
});

SearchInput.addEventListener("keyup", SearchData);
