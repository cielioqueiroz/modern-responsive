function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Message:</strong>${message}<br>`;
}