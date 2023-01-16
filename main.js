let mainText = document.querySelector("h1")

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    // console.log("scrollY", value);

    if(value > 220){
        mainText.style.animation = "text-bye 2s ease-out forwards";
    }
    else{
        mainText.style.animation = "text-hi 2s ease-out";
    }
});