const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
console.log(window.location.href);

const signup = (e) => {
    e.preventDefault();
    sessionStorage.setItem('name', name.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('mobile', mobile.value);
    console.log(window.location.href);
    window.location.assign('./signin.html');
}

const signupButton = document.getElementById('signup-button');
signupButton.addEventListener('click', (e) => {signup(e)});