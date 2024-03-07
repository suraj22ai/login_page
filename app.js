let Signupbtn = document.querySelector('.Signupbtn');
let SignInbtn = document.querySelector('.Signinbtn');
let namefield = document.querySelector('.namefield');
let underLine = document.querySelector('.underline');
let title = document.querySelector('.title');
let text = document.querySelector('.text');

SignInbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    Signupbtn.classList.add('disable');
    SignInbtn.classList.remove('disable');
    underLine.style.transform = 'translateX(35px)';
    text.innerHTML = 'Forgot password? ';
});
Signupbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign up';
    Signupbtn.classList.remove('disable');
    SignInbtn.classList.add('disable');
    underLine.style.transform = 'translateX(0)';
    text.innerHTML = 'Password Suggestion ';
});