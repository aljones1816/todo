function rendertodos(todolist) {
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
  
export {rendertodos}