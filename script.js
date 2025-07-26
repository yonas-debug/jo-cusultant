/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #3498db, #2980b9); /* Blue Gradient */
    color: #fff;
    min-height: 100vh; /* Ensures the background covers the entire viewport */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; /* Add padding for smaller screens */
}

.container {
    display: flex;
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: center;
    width: 100%; /* Take up the full width */
    max-width: 800px; /* Limit the max width */
}

/* Form Box */
.form-box, .profile-box, .congratulations-box, .events-box {
    background: rgba(255, 255, 255, 0.15); /* Semi-transparent white */
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 400px; /* Limit the width of the form box */
    margin-bottom: 20px; /* Add some space below */
}

.logo {
    width: 100px; /* Adjust as needed */
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 20px;
    color: #fff;
}

p {
    margin-bottom: 20px;
    font-size: 16px;
}

/* Input Group */
.input-group {
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    margin-bottom: 10px;
}

button {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
}

button:hover {
    background-color: #45a049;
}

.register-link, .forgot-password {
    font-size: 14px;
    margin-top: 10px;
}

.register-link a, .forgot-password a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

/* Background Graphics (Adjust positioning as needed) */
.background-graphics {
    position: absolute; /* Allows for absolute positioning of graphics */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Place behind content */
    overflow: hidden; /* Prevent graphics from overflowing */
}

.graphic {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
    border-radius: 50%;
    animation: float 8s linear infinite; /* Simple animation */
}

.graphic-1 {
    width: 150px;
    height: 150px;
    top: 10%;
    left: 10%;
}

.graphic-2 {
    width: 80px;
    height: 80px;
    bottom: 15%;
    right: 15%;
    animation-delay: 3s; /* Offset animation start */
}
/* Animation keyframes */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(20px); }
    100% { transform: translateY(0px); }
}

/* Responsive Design */
@media (max-width:/* css/style.css */
body {
    font-family: sans-serif;
    background-color: #e6f7ff; /* Light blue background */
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    width: 80%;
    max-width: 800px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;  /* Add padding for better spacing */
    background-color: #fff; /* Add a white background */
}

.form-wrapper {
    display: flex;
    background-color: #fff;
    border-radius: 10px;
}

.logo-container {
    background-color: #007bff; /* Primary blue color */
    color: white;
    padding: 20px;
    text-align: center;
    width: 40%;
}

.logo {
    width: 100px; /* Adjust logo size as needed */
    margin-bottom: 10px;
}

.tagline {
    font-style: italic;
    font-size: 0.9em;
}

.form-box {
    padding: 20px;
    width: 60%;
}

.form-box h2 {
    margin-bottom: 20px;
    color: #333;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Important for width to include padding */
    font-size: 1em;
}

button {
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    width: 100%;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.social-login {
    text-align: center;
    margin-top: 20px;
    color: #777;
}

.social-icons {
    margin-top: 10px;
}

.social-icons a {
    display: inline-block;
    margin: 0 10px;
    font-size: 1.5em;
    color: #444;
}

.social-icons a:hover {
    color: #007bff;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .form-wrapper {
        flex-direction: column;
    }

    .logo-container {
        width: 100%;
    }

    .form-box {
        width: 100%;
    }

    .container {
        width: 95%; /* Take up more screen on smaller devices */
        margin: 10px;
    }
}

/* styles for the general list and event list*/
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
 600px) {
    .container {
        padding: 10px;
    }
    .form-box, .profile-box, .congratulations-box, .events-box {
        max-width: 100%; /* Take full width on smaller screens */
        padding: 20px;
    }
    /* Adjust background graphic positions for smaller screens */
    .graphic-1 {
        width: 100px;
        height: 100px;
        top: 5%;
        left: 5%;
    }
    .graphic-2 {
        width: 60px;
        height: 60px;
        bottom: 10%;
        right: 10%;
    }
}
