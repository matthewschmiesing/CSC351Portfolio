//remove section works but isnt very useful cuz it deletes the whole section and you cant get it back
//toggleSection and addSection do not work fully

function toggleSection(sectionID){
    let container = document.getElementById('body');//finds the section with this ID
    let placeholder = document.createElement('div');
    let section = document.getElementById(sectionID)
    console.log(section)
    console.log(container)


    if (container.contains(section)) {
        console.log("remove section just ran")
        container.replaceChild(placeholder, section);
    } else {
        console.log("add section just ran")
        container.replaceChild(section, placeholder);
    }
}




function addSection() {
    let container = 
             document.getElementById('sectionContainer');//finds the section with this ID

    // // Create a new div
    // let newDiv = 
    //         document.createElement('section');//element tag that it creates
    // newDiv.idName = 'new-div';//class name for css, i made it just make the height larger
    // newDiv.textContent = 'Congrats You Made A New Div!';//filler text for new section/div

    // // Add the new div to the container
    // container.appendChild(newDiv);
    let section = document.getElementById(sectionID);//selects divs in that class
    container.append(section)
}

function removeSection(sectionID) {

    let section = document.getElementById(sectionID);//selects divs in that class
    section.remove()
    
}