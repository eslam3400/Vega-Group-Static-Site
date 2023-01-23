const successMessage = document.getElementById('mail-success');
const failMessage = document.getElementById('mail-fail');
const invalidMessage = document.getElementById('mail-invalid');
const name = document.getElementById("client-name");
const subject = document.getElementById("client-subject");
const email = document.getElementById("client-email");
const message = document.getElementById("client-message");
const foundedAtElem = document.getElementById('founded-at');

calculateFoundedAt();
hideMessages();

function calculateFoundedAt() {
    const foundedAt = new Date('2009-01-01');
    const today = new Date();
    const diff = today.getFullYear() - foundedAt.getFullYear();
    foundedAtElem.innerText = diff;
}


function sendMail() {

    hideMessages();

    const data = {
        name: name.value,
        subject: subject.value,
        email: email.value,
        message: message.value,
    };

    if (!isEmailInputsValid(data)) return invalidMessage.style.display = "block";

    emailjs.send('service_dq0jbqa', 'template_qxx3dpi', data, "SKPeBn7cB9wABnlDR")
        .then(res => successMessage.style.display = 'block',
            err => failMessage.style.display = 'block'
        );
}

function isEmailInputsValid(obj) {
    for (var key in obj)
        if (obj[key] == null || obj[key].trim() == "") return false;
    return true;
}

function hideMessages() {
    successMessage.style.display = 'none';
    failMessage.style.display = 'none';
    invalidMessage.style.display = 'none';
}