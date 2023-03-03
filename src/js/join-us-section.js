import validate from "./email-validator.js";

class AddSection {
  constructor(title, btn) {
    this.title = title;
    this.btn = btn;
  }

  createJoinUsSection() {
    const joinUsSection = document.querySelector(".app-section--join-us");

    const titleText = document.createElement("h2");
    titleText.className = "app-title";
    titleText.textContent = this.title; // implementation
    joinUsSection.appendChild(titleText);

    const subTitleText = document.createElement("p");
    subTitleText.className = "app-subtitle app-subtitle--join-us";
    subTitleText.textContent = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    joinUsSection.appendChild(subTitleText);

    const inputField = document.createElement("form");
    inputField.className = "app-section__input";

    joinUsSection.appendChild(inputField);

    const inputEmail = document.createElement("input");
    inputEmail.className = "app-section__input-email";
    inputEmail.type = "email";
    inputEmail.placeholder = "Email";
    inputField.appendChild(inputEmail);

    const inputBtn = document.createElement("button");
    inputBtn.className = "app-section__button app-section__button--subscribe";
    inputBtn.type = "submit";
    inputField.appendChild(inputBtn);

    // localStorage method implementation
    let inputedValue = localStorage.getItem("email");
    const changeField = () => {
      inputBtn.textContent = "Unsubscribe";
      inputEmail.style.display = "none";
      inputField.id = "subbed";
    };

    const defaultField = () => {
      inputBtn.textContent = this.btn;
      inputEmail.style.display = "block";
      inputField.id = "unsubbed";
    };

    if (inputedValue !== null && validate(inputedValue) === true) {
      changeField();
    } else {
      defaultField();
    }

    inputEmail.addEventListener("input", () => {
      inputedValue = inputEmail.value;
      inputField.id = "unsubbed";
      document.getElementById("unsubbed").addEventListener(
        "submit",
        (event) => {
          event.preventDefault();
          localStorage.setItem("email", inputedValue);
          if (validate(inputedValue) === true) {
            changeField();
            document.getElementById("subbed").addEventListener("submit", (e) => {
              e.preventDefault();
              defaultField();
              localStorage.removeItem("email");
              inputEmail.value = localStorage.getItem("email");
            });
          } else if (validate(inputedValue) === false) {
            defaultField();
          }
        },
        false
      );
    });
  }
}

class SectionCreator {
  create(type) {
    switch (type) {
      case "standard":
        return new AddSection(
          "Join Our Program",
          "Subscribe"
        ).createJoinUsSection();
      case "advanced":
        return new AddSection(
          "Join Our Advanced Program",
          "Subscribe to Advanced Program"
        ).createJoinUsSection();
      default:
    }
  }
}
export default SectionCreator;
