document.addEventListener('DOMContentLoaded', function() {
  // Registration Form
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      if (!email.includes('@')) {
        alert("Invalid email address.");
        return;
      }

      const newUser = {
        fullName: fullName,
        email: email,
        password: password // STILL INSECURE!
      };

      //Read existing users from localStorage or initialize an empty array
      let users = JSON.parse(localStorage.getItem('users')) || [];

      //Add the new user to the array
      users.push(newUser);

      //Save the updated array back to localStorage
      localStorage.setItem('users', JSON.stringify(users));

      window.location.href = 'congratulations.html';
    });
  }

  // Sign In Form
  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      let users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        alert("Sign in successful!");
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'profile.html';
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  // Profile Page (See inline script in profile.html)
  // Event Page (See inline script in events.html)

});
