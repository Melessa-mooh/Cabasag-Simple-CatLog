function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    
    if (username === 'admin' && password === 'password') {
        errorMsg.textContent = '';
        alert('Login successful!');
        
    } else {
        errorMsg.textContent = 'Invalid username or password.';
    }
}