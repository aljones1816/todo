import { DataHandler } from "./AppLogic/DataHandler";

function initalizeApp() {
  const app = document.getElementById("app");

  // create a form to login a new user
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

  app.appendChild(loginForm);
  app.appendChild(usernameAlert);

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    const guy = DataHandler().handleUserLogin(username, password);
    if (guy) {
      usernameAlert.innerText = "";
      usernameAlert.innerText = `Welcome ${guy.username}!`;
      usernameInput.value = "";
      passwordInput.value = "";
    } else {
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
        usernameAlert.innerText = `Welcome ${username}!`;
      });
    }
  });
}

initalizeApp();
