document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const date = new Date(document.getElementById('date').value);
    const age = new Date().getFullYear() - date.getFullYear();

    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Οι κωδικοί δεν ταιριάζουν!');
    }

    if (age < 18) {
        event.preventDefault();
        alert('Πρέπει να είστε τουλάχιστον 18 ετών.');
    }
});
