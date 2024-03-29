document.addEventListener("DOMContentLoaded", function() {
    var greetingButton = document.getElementById("greetingButton");
    var calculatorButton = document.getElementById("calculatorButton");
    var aboutMeButton = document.getElementById("aboutMeButton"); // "Tell me about yourself" button
    var emoji = "😊"; // Smiley emoji

    // Define variables for name, birthdate, and favorite hobby
    var name = "Ethan";
    var birthdate = new Date("2000-04-03"); // My birthday
    var favoriteHobby = "Listening to Music";

    greetingButton.addEventListener("click", function() {
        var now = new Date();
        var hour = now.getHours();
        var greeting;

        // Calculate age dynamically based on my birthdate
        var age = now.getFullYear() - birthdate.getFullYear();
        var birthMonth = birthdate.getMonth();
        var currentMonth = now.getMonth();

        if (currentMonth < birthMonth || (currentMonth === birthMonth && now.getDate() < birthdate.getDate())) {
            age--;
        }

        if (hour < 12) {
            greeting = "Good morning!";
        } else if (hour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        // Display greeting with variables in an alert
        alert(greeting + "\nName: " + name + "\nAge: " + age + "\nFavorite Hobby: " + favoriteHobby + " " + emoji);
    });

    // Function to calculate exponent
    function calculateExponent(base, exponent) {
        return Math.pow(base, exponent);
    }

    // Handling form submission for exponent calculator
    var exponentForm = document.getElementById("exponentForm");
    exponentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var base = parseFloat(document.getElementById("base").value);
        var exponent = parseFloat(document.getElementById("exponent").value);
        var result = calculateExponent(base, exponent);
        document.getElementById("result").textContent = "Result: " + result;
    });

    // Toggle visibility of my calculator
    calculatorButton.addEventListener("click", function() {
        var calculator = document.getElementById("calculator");
        calculator.style.display = (calculator.style.display === "none") ? "block" : "none";
    });

    // Display favorite foods
    var favoriteFoods = ["Mexican food", "Korean food", "Seafood", "Soul food"];
    var foodList = document.createElement("ul");
    favoriteFoods.forEach(function(food) {
        var listItem = document.createElement("li");
        listItem.textContent = food;
        foodList.appendChild(listItem);
    });
    document.getElementById("favoriteFoods").appendChild(foodList);

    // Display information about user's age
    aboutMeButton.addEventListener("click", function() {
        var age = prompt("Please enter your age:");
        var message;

        if (age === null) {
            return; // If user cancels the prompt, do nothing
        }

        age = parseInt(age);

        if (isNaN(age)) {
            message = "Invalid age. Please enter a number.";
        } else if (age < 0) {
            message = "Age cannot be negative.";
        } else {
            message = "Congratulations for being on this planet for " + age + " years! 🌍";
            if (age < 18) {
                message += "\nYou are under 18 years old, so not an adult just yet!";
            } else if (age >= 18 && age <= 65) {
                message += "\nYou are between 18 and 65 years old. You have so much life to live still!";
            } else {
                message += "\nYou are over 65 years old. You should have wiseness that comes with your age!";
            }
        }

        alert(message);
    });

    // Event listener for "Tell me about yourself" button
    aboutMeButton.addEventListener("click", function() {
        var age = prompt("Please enter your age:");
        var message;

        if (age === null) {
            return; // If user cancels the prompt, do nothing
        }

        age = parseInt(age);

        if (isNaN(age)) {
            message = "Invalid age. Please enter a number.";
        } else if (age < 0) {
            message = "Age cannot be negative.";
        } else {
            message = "Congratulations for being on this planet for " + age + " years! 🌍";
        }

        alert(message);
    });
});