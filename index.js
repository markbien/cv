// const introContainer = document.querySelector('.intro-container');
// const introText = "Hello, my name is Mark. An aspiring web developer. I took BS Computer Science in Arellano University while working as an Microsoft 365 Support Ambassador in Rhipe Philippines. Feel free to message me to give any feedback about my works. Stay safe and well.";
// const workExperienceContainer = document.querySelector('#work-experience-container');
// const workExperience = document.querySelector('#work-experience');
// const cardContainer = document.querySelector('.card-container');
// const body = document.querySelector('body');
// const nav = document.querySelector('nav');

// window.onload = function(){
//     initializeIntroduction();
// }

// window.addEventListener('scroll', function(){
//     slideInOnScroll();
// });

// function initializeIntroduction(){
//     let index = 0;
//     let inputText = setInterval(function(){
//         if(index >= introText.length){
//             clearInterval(inputText);
//         }
//         const span = document.createElement('span');
//         span.textContent = introText[index];
//         introContainer.appendChild(span);
//         index++;
//     }, 15);
// }

// function slideInOnScroll(){
//     if(window.scrollY >= (workExperienceContainer.offsetTop-workExperienceContainer.clientHeight)/2){
//         workExperience.style.transform = 'translateX(0)';
//     } else {
//         workExperience.style.transform = 'translateX(-105%)';
//     }

//     if(window.scrollY >= cardContainer.offsetTop-cardContainer.clientHeight){
//         cardContainer.style.transform = 'translateX(0)';
//     } else {
//         cardContainer.style.transform = 'translateX(-105%)';
//     }
// }