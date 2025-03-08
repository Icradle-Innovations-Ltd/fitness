document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) {
        console.error('Hamburger or nav-links element not found!');
        return;
    }

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Workouts Signup Form Submission
    const workoutForm = document.querySelector('.signup-form form');
    if (workoutForm) {
        workoutForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('workout-email').value;
            const goal = document.getElementById('workout-goal').value;
            if (email && goal) {
                alert(`Thank you, ${email}! You’ve signed up for ${goal} workouts.`);
                this.reset();
            } else {
                alert('Please fill in all fields!');
            }
        });
    }
});