function rendertodos(todolist) {
    // we check for nulls at highest level so assume not null
    const content = document.getElementById('content')
    todolist.map(item => {
        let itemhtml = `
                <div>
                    <p>This item is ${item.title}</p>
                </div>
            `;
        content.innerHTML += itemhtml
    })
}

function renderNav() {
    const content = document.getElementById('navbar')
    let navHtml = `
        <div class=navbar>
            <ul id=navlist>
                <li id="projects-link">Projects</li>
                <li id="home-link">Home</li>
            </ul>
        </div>
    `;
    content.innerHTML += navHtml;
}

function renderProjects(projectsList) {
    const content = document.getElementById('projects')
    const projects = document.createElement('ul');
    content.appendChild(projects);
    // we check if list is null in index so assume not null
    projectsList.map(project => {
        let projectHTML = `
        <li id="${project.id}">${project.title}</li>
        `;
        console.log(projectHTML);
        projects.innerHTML += projectHTML;
        
    })
    
}

export { rendertodos, renderNav, renderProjects }