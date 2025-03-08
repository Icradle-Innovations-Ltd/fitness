document.addEventListener('DOMContentLoaded', function () {
    // Form Toggle Logic
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const formContents = document.querySelectorAll('.form-content');
    const switchLinks = document.querySelectorAll('[data-switch]');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            formContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            const formType = this.getAttribute('data-form');
            document.querySelector(`.form-content.${formType}-form`).classList.add('active');
        });
    });

    switchLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const formType = this.getAttribute('data-switch');
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            formContents.forEach(content => content.classList.remove('active'));
            document.querySelector(`.toggle-btn[data-form="${formType}"]`).classList.add('active');
            document.querySelector(`.form-content.${formType}-form`).classList.add('active');
        });
    });

    // Sign Up Form Validation
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const terms = document.getElementById('terms').checked;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            if (!terms) {
                alert('Please accept the Terms & Conditions!');
                return;
            }

            alert('Sign Up Successful!\nEmail: ' + email);
            this.reset();
            // Redirect to homepage
            window.location.href = 'index.html';
        });
    }

    // Log In Form Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (!email || !password) {
                alert('Please fill in all fields!');
                return;
            }

            alert('Log In Successful!\nEmail: ' + email);
            this.reset();
            // Redirect to homepage
            window.location.href = 'index.html';
        });
    }
});