document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("greetingButton");

    button.addEventListener("click", function() {
        var now = new Date();
        var hour = now.getHours();
        var greeting;

        if (hour < 12) {
            greeting = "Good morning!";
        } else if (hour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        alert(greeting);
    });
});

