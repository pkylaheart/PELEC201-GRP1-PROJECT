document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-row").addEventListener("click", function(event) {
        event.preventDefault();

        alert("Thank you for leaving a comment/suggestion!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("comments").value = "";
    });
});
