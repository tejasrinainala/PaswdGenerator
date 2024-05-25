
function generatePassword() {
    const length = 15;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password1 = "";
    let password2 = "";
    
    for (let i = 0, n = charset.length; i < length; ++i) {
        password1 += charset.charAt(Math.floor(Math.random() * n));
        password2 += charset.charAt(Math.floor(Math.random() * n));
    }
    
    document.querySelector(".p1 label").innerText = password1;
    document.querySelector(".p2 label").innerText = password2;
}

