function addListItem(listItem) {
    let itemsCurrent = JSON.parse(window.localStorage.getItem('items'));
    if (!itemsCurrent) {
        itemsCurrent = []
    }
    itemsCurrent.push(listItem)
    
    window.localStorage.setItem('items', JSON.stringify(itemsCurrent));

    return

}

export { addListItem }