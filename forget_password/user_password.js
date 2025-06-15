let submitBtn = document.getElementById("submit");
let emailIpt = document.getElementById("email");
let codeIpt = document.querySelector("#code");
let codeText = document.getElementById("codeText");

let minet = document.querySelector(".minet");
let second = document.querySelector(".second");

let randomCode = Math.floor(Math.random()*1_000_000);

let min = 1;
let sec = 59;

let timer = setInterval(()=>{

    sec--;
    if(sec == 0){
        sec = 59;
        min--;

    }else if(min == -1){
        clearInterval(timer);
        sec = min = 0;
        codeIpt.disabled = true;
        codeText.innerHTML = "زمان به اتمام رسید !";
        codeText.style.color = "red";
        codeText.style.fontWeight = "bold";
        codeText.style.textDecoration = "underline";
    }

    minet.innerHTML = min;
    second.innerHTML = sec;

},1000);

setTimeout(()=>{
    alert(`این کد ورود شماست (${randomCode})`);
},7000)

submitBtn.addEventListener("click",()=>{

    if(codeIpt.value == randomCode){
        setTimeout(()=>{
            location.href = "../index.html"
        },2000)
        
    }else if(codeIpt.value !== randomCode){
        codeText.innerHTML = "کد وارد شده درست نیست !"
        codeText.style.color = "red";
        codeText.style.fontWeight = "bold";
        codeText.style.textDecoration = "underline";
    }
})