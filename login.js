document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'Ferrebee' && password === '000Qwerty;') {
        sessionStorage.setItem('loggedIn', true);
        sessionStorage.setItem('transact', false); // Initial transaction status
        sessionStorage.setItem('balance', 52); // Initial balance
        window.location.href = 'wallet.html';
    } else {
        document.getElementById('loginNotification').textContent = 'Invalid username or password';
    }
});
