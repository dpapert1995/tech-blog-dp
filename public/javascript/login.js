// Sign up form handler
async function signupFormHandler(event) {
    event.preventDefault();

    // Gets information from log in form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Verify all info is the same
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            alert('Log in sucessful.');

            const response = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {'Content-Type': 'application/json'}
            });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText)
            }

        } else {
            alert(response.statusText)
        }
    }
}

// Login form handler
async function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);