$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        var newState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            location.reload();
        });
    });  

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var name = $("[name=burger-name]").val().trim();

        if(name !== "") {
            var newBurger = {
                name: name
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                location.reload();
            });
        }
        else {
            $("[name=burger-name]").val("");
        }
    }); 
});