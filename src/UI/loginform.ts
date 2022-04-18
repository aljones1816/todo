import { DataHandler } from "../AppLogic/DataHandler";

const logincontainer = document.createElement("div");
logincontainer.id = "login-container";

const loginForm = document.createElement("form");
loginForm.id = "loginForm";

const loginHeading = document.createElement("h2");
loginHeading.innerText = "login";
loginForm.appendChild(loginHeading);

const usernameLabel = document.createElement("label");
usernameLabel.innerText = "Username: ";

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "usernameInput";

const passwordLabel = document.createElement("label");
passwordLabel.innerText = "Password: ";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "passwordInput";

const loginButton = document.createElement("button");
loginButton.innerText = "login";
loginButton.id = "loginButton";

loginForm.appendChild(usernameLabel);
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordLabel);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginButton);

const usernameAlert = document.createElement("p");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  const guy = DataHandler().handleUserLogin(username, password);

  if (guy != 4 && guy != 5) {
    usernameInput.value = "";
    passwordInput.value = "";
    location.reload();
  } else if (guy === 4) {
    usernameAlert.innerText = "";
    usernameAlert.innerText = "No user with that name bud!";
    const registerButton = document.createElement("button");
    registerButton.innerText = "register a new user instead";
    registerButton.id = "registerButton";
    usernameAlert.appendChild(registerButton);

    registerButton.addEventListener("click", (e) => {
      e.preventDefault();
      DataHandler().handleRegisterUser(username, password);
      DataHandler().handleUserLogin(username, password);
      usernameAlert.innerText = "";
      location.reload();
    });
  } else {
    usernameAlert.innerText = "";
    usernameAlert.innerText = `Wrong Password buttface!`;
  }
});

logincontainer.appendChild(loginForm);
logincontainer.appendChild(usernameAlert);
export { logincontainer };
