
document.addEventListener("DOMContentLoaded", function() { //run after HTML has loaded
    fetch("iphoneInfo.json")//grabs file
    .then(response => response.json())//converts into js object
    .then(data => {
        Object.keys(data).forEach(key => { //makes array of all keys 
            let modalTitle = document.getElementById(`${key}Label`); //returns title elements, refers to the labels in the HTML page, basically matches 'modalTitle' with a specific ID
            let modalContent = document.getElementById(`${key}Content`);//returns contents elements, refers to the content in the HTML page, basically matches 'modalContet with a specific ID

            if (modalTitle && modalContent) { //checks that the modals actually exists in the HTML
                modalTitle.textContent = data[key].title; //sets the title based off the key, 'title' is the section in the json file
                modalContent.innerHTML = ""; // Clears existing content if any

                //adds the content/detail as a paragraph just like before
                data[key].details.forEach(detail => { //loops through and adds a 'p' tag for each line in the content in the json file, 'detail' is the section in the json file
                    let p = document.createElement("p");
                    p.textContent = detail;//sets the content to chunk of paragraph text
                    modalContent.appendChild(p); //adds to the content part of corresponding section of the HTML
                });
            }
        });
    })
    .catch(error => console.error("Error loading JSON:", error));//error handling
});

