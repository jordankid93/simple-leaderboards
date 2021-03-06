$(document).ready(function() {

    function handleError(message) {
        $("#errorMessage").text(message);
    }

    function sendAjax(action, data) {
        $.ajax({
            cache: false,
            type: "POST",
            url: action,
            data: data,
            dataType: "json",
            success: function(result, status, xhr) {
                // $("#domoMessage").animate({width:'hide'},350);

                console.log("Hello World!");
                window.location = result.redirect;
            },
            error: function(xhr, status, error) {
                var messageObj = JSON.parse(xhr.responseText);

                handleError(messageObj.error);
            }
        });
    }

    $("#confirm").on("click", function(e) {
        e.preventDefault();

        sendAjax('/Confirm', {
            id : $(this).attr('data-shipmentid')
        });

        return false;
    });

});