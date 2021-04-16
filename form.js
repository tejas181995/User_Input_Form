const text = document.querySelector('#text');
const text_error = document.querySelector('.text-error');
const email = document.querySelector('#email');
const email_error = document.querySelector('.email-error');

text.addEventListener('input', function() {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,14}$");
    if (nameRegex.test(text.value))
        text_error.textContent = "";
    else
        text_error.textContent = "name is not valid";
});

email.addEventListener('input', function() {
    let emailRegex = RegExp("^[A-Za-z0-9+-]+(\\.[A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]{2,}){1,2}$");
    if (emailRegex.test(email.value))
        email_error.textContent = "";
    else
        email_error.textContent = "Invalid Email";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});