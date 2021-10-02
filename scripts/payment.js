(function (window) {
    'use strict';
    var App = window.App;
    var FormHandler = App.FormHandler;

    var FORM_SELECTOR = '[data-payment="form"]';
    var formHandler = new FormHandler(FORM_SELECTOR);

    var title;
    var name;
    formHandler.addSubmitHandler(function (data) {
        title = data["title"];
        name = data["username"];
        var modal = document.getElementById("openModal");
        if (title && name)
            modal.textContent = "Thank you for your payment, " + title + ". " + name;
        else if (name)
            modal.textContent = "Thank you for your payment, " + name;
        else
            modal.textContent = "Thank you for your payment";
        modal.style.display = "block";
        //sayThanks();
        $('#pay').on('click', function () {
            $('#openModal').show();
        });
        $('#openModal').fadeOut(10000);
        $('#closeModal').on('click', function () {
            $('#openModal').hide();
        });
    });

})(window);