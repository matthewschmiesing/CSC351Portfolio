function addSection() {
    let container = 
            document.getElementById('newDivContainer');//finds the section with this ID

    // Create a new div
    let newDiv = 
            document.createElement('div');//element tag that it creates
    newDiv.className = 'new-div';//class name for css, i made it just make the height larger
    newDiv.textContent = 'Congrats You Made A New Div!';//filler text for new section/div

    // Add the new div to the container
    container.appendChild(newDiv);
}

function removeSection() {
    let container = 
            document.getElementById('newDivContainer');//element tag that it grabs

    // Remove the last added div
    let divs = container.querySelectorAll('.new-div');//selects divs in that class
    if (divs.length > 0) {//checks that the list isnt empty
        let lastDiv = divs[divs.length - 1];//grabs the most recent div
        container.removeChild(lastDiv);//removes it
    }
}