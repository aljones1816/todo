import renderProjects from "./projects";
import { Project } from "../AppLogic/Project";
import { Storage } from "../AppLogic/Storage";

export default function renderMenu() {
  let menuIsClicked = false;
  let menu = document.createElement("div");
  let menuHTML = `
        <div class=navbar>
        <svg id = "menuBar" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="24" fill="currentColor"><path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg>
        </div>
    `;
  menu.innerHTML = menuHTML;

  document.addEventListener("click", () => {
    if (menuIsClicked) {
      menu.innerHTML = menuHTML;
      menuIsClicked = false;
    } else {
      let currentProjects = Storage.readData("projects");
      renderProjects(currentProjects);
      menu.appendChild(renderProjects(currentProjects).projectUL);
      menuIsClicked = true;
    }
  });

  return { menu };
}
