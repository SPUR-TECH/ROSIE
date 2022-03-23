function sendMail(contactForm) {
    emailjs.send("service_vncwzfa", "rosie", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                $("#success").text("Message Sent");
                $("#success").css("background-color", "green");
                $(".center-form form").get(0).reset();
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}