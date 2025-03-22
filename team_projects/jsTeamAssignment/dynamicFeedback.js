document.addEventListener("DOMContentLoaded", () => {
    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', () => {
        if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });

    // Character Counter
    const messageInput = document.getElementById('delIns');
    const charCounter = document.getElementById('charCounter');

    messageInput.addEventListener('input', () => {
        const remaining = 300 - messageInput.value.length;
        charCounter.textContent = `${remaining} characters remaining`;
    });
});