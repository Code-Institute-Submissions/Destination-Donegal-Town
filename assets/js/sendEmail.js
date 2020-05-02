function sendMail(contactForm) {
    emailjs.send("gmail", "destination_donegal_town", {
        "from_fname": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.email.value,
        "query_request": contactForm.query.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}