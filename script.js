document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("greetingButton");
    var emoji = "😊"; // Smiley emoji

    // Define variables for name, birthdate, and favorite hobby
    var name = "Ethan";
    var birthdate = new Date("2000-04-03"); // My birthdayt
    var favoriteHobby = "Listening to Music";

    button.addEventListener("click", function() {
        var now = new Date();
        var hour = now.getHours();
        var greeting;

        // Calculate age dynamically based on birthdate
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
});