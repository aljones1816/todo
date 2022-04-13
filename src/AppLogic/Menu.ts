export default function Menu() {

    function toggleProjectMenu() {
    let projectList = document.getElementById("projects");
    if (projectList.classList.contains("hidden")) {
      projectList.classList.remove("hidden");
      projectList.classList.add("visible");
    } else {
      projectList.classList.remove("visible");
      projectList.classList.add("hidden");
    }
  }

  return { toggleProjectMenu };
}