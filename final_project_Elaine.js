
    // Function to validate the form
    function validateForm(event) {
        event.preventDefault(); 

        // Get the form elements
        const form = event.target;
        const inputs = form.querySelectorAll('input, select');
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        let isValid = true;

        // Check for empty inputs
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        // Check for unchecked checkboxes
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                isValid = false;
                checkbox.parentNode.classList.add('invalid');
            } else {
                checkbox.parentNode.classList.remove('invalid');
            }
        });

        // Display alert if form is invalid
        if (!isValid) {
            alert('Please fill in all fields and check the required checkboxes.');
        } else {
            alert('Form submitted successfully.');
            form.reset(); 
        }
    }


    const signupButtons = document.querySelectorAll('.signup-btn');
    signupButtons.forEach(button => {
        button.addEventListener('click', validateForm);
    });
