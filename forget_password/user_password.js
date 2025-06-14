let submitBtn = document.getElementById("submit");
let emailIpt = document.getElementById("email");
let codeIpt = document.querySelector("#code");
let codeText = document.getElementById("codeText");

let minet = document.querySelector(".minet")
let second = document.querySelector(".second")
let mili_second = document.querySelector(".mili_second")

let min = 1
let sec = 60
let mili = 59

let timer = setInterval(()=>{

    mili--;
    if(mili == 0){
        mili = 59;
        sec--;

    }else if(sec == 0){
        sec = 60;
        min--;

    }else if(min == 0){
        mili = sec = min = 0;
        clearInterval(timer);
        codeIpt.disabled = true;
        codeText.innerHTML = "زمان به اتمام رسید !";
        codeText.style.color = "red";
        codeText.style.fontWeight = "bold";
    }

    minet.innerHTML = min
    second.innerHTML = sec
    mili_second.innerHTML = mili

},10)

submitBtn.addEventListener("click",()=>{
    setTimeout(()=>{
        location.href = "../index.html"
    },2000)
})