const introContainer = document.querySelector('.intro-container');
const introText = "Hello, my name is Mark. An aspiring web developer. I took BS Computer Science in Arellano University while working as an Microsoft 365 Support Ambassador in Rhipe Philippines. Feel free to message me to give any feedback about my works. Stay safe and well.";

window.onload = function(){
    let index = 0;
    let inputText = setInterval(function(){
        if(index >= introText.length){
            clearInterval(inputText);
        }
        const span = document.createElement('span');
        span.textContent = introText[index];
        introContainer.appendChild(span);
        index++;
    }, 30);
}