document.addEventListener("DOMContentLoaded", function() {
    var greetingButton = document.getElementById("greetingButton");
    var calculatorButton = document.getElementById("calculatorButton");
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
});
