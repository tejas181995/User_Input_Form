const text = document.querySelector('#text');
const text_error = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,14}$");
    if (nameRegex.test(text.value))
        text_error.textContent = "";
    else
        text_error.textContent = "name is not valid";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});