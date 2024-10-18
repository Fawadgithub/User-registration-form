
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear previous error messages
        document.querySelectorAll('.error').forEach(err => err.innerHTML = '');

        let isValid = true;

        // Name validation
        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            document.getElementById('nameError').innerHTML = 'Name is required.';
            isValid = false;
        }

        // Email validation
        const email = document.getElementById('email').value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').innerHTML = 'Invalid email format.';
            isValid = false;
        }

        // Phone validation
        const phone = document.getElementById('phone').value;
        if (!/^\d{10}$/.test(phone)) {
            document.getElementById('phoneError').innerHTML = 'Phone number must be 10 digits.';
            isValid = false;
        }

        // Age validation
        const age = parseInt(document.getElementById('age').value);
        if (isNaN(age) || age < 1 || age > 120) {
            document.getElementById('ageError').innerHTML = 'Age must be between 1 and 120.';
            isValid = false;
        }

        // Password validation
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password.length < 6) {
            document.getElementById('passwordError').innerHTML = 'Password must be at least 6 characters.';
            isValid = false;
        }
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match.';
            isValid = false;
        }

        // If all fields are valid, submit the form (you can handle the submission logic here)
        if (isValid) {
            alert('Registration successful!');
            // Here you would typically send the data to your server
        }
    });
