function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const errorMsg = document.getElementById('regErrorMsg');


    if (username && email && password) {
        errorMsg.textContent = '';
        alert('Registration successful!');
    
    } else {
        errorMsg.textContent = 'Please fill in all fields.';
    }
}