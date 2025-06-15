// ==================== phone-icon ====================

let phoneIpt = document.getElementById("number");
let icons = document.querySelector("i");
let passwordIpt = document.querySelector("#ipt-password");
let dateIpt = document.querySelector(".div-date");
let submit = document.getElementById("btn-account");

phoneIpt.addEventListener("click",()=>{
    icons.style.color = "white"
    
    passwordIpt.addEventListener("click",()=>{
        icons.style.color = "white"
    })
})

// ==================== button-event ====================

const save = document.getElementById("btn-account");

save.addEventListener("click",()=>{
    setTimeout(()=>{
        window.location.href = "../user_account/user_account.html";
    },2000);
});

// ==================== lock-onlock ====================

let lock = document.getElementById("lock");
let onlock = document.getElementById("onlock");


onlock.style.display = "none";

lock.addEventListener("click",()=>{
    lock.style.display = "none";
    onlock.style.display = "inline";
    passwordIpt.type = "text";
    onlock.addEventListener("click",()=>{
        onlock.style.display = "none";
        lock.style.display = "inline";
        passwordIpt.type = "password";
    })
})