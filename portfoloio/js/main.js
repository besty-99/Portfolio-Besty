const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        emailjs.init("q2DRn-nJMUGytKv1w");

        const params = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        emailjs.send("service_544lkvg", "template_38s1ufe", params) 
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                successMessage.classList.remove('d-none');
                form.reset();
                errorMessage.classList.add('d-none');
            }, function(error) {
                console.error('FAILED...', error);
                errorMessage.classList.remove('d-none');
                successMessage.classList.add('d-none');
            });
    });