// Modal login logic
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');
const bookingForm = document.getElementById('booking-form');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'jahidads' && password === 'jahidhasan2.0ff') {
        alert('Login successful');
        loginModal.style.display = 'none';
        localStorage.setItem('loggedIn', 'true');
        loginBtn.textContent = 'Logout';
        loginBtn.removeEventListener('click', logout);
        loginBtn.addEventListener('click', logout);
    } else {
        alert('Incorrect username or password');
    }
});

function logout() {
    localStorage.removeItem('loggedIn');
    loginBtn.textContent = 'Login';
    loginBtn.removeEventListener('click', logout);
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
}

// Booking form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your consultation has been booked!');
});
