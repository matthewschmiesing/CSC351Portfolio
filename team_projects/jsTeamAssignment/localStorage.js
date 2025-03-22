document.addEventListener("DOMContentLoaded", () => {
    const fields = ["fname", "lname", "email", "credit", "address", "delIns"];

    // Load saved data from localStorage
    fields.forEach(field => {
        const input = document.getElementById(field);
        const savedValue = localStorage.getItem(field);
        if (savedValue) {
            input.value = savedValue;
        }
    });

    // Save input data to localStorage on change
    fields.forEach(field => {
        const input = document.getElementById(field);
        input.addEventListener("input", () => {
            localStorage.setItem(field, input.value);
        });
    });

});