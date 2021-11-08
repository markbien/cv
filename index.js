// declare variables
let listBtn = document.querySelector(".project-list-button");
let slideshowBtn = document.querySelector(".project-slideshow");
let projectListContainer = document.querySelector(".project-list-container");
let slideshowContainer = document.querySelector(".carousel");

// declare function
function changeDisplay(item, item2, container1, container2){
  if(item.classList.contains('hide')){
    item.classList.remove('hide');
    container1.classList.remove('hide');

    item2.classList.add('hide');
    container2.classList.add('hide')
  } else {
    item.classList.add('hide');
    container1.classList.add('hide');

    item2.classList.remove('hide');
    container2.classList.remove('hide')
  }
}


// add event listeners
listBtn.addEventListener("click", function(){
  changeDisplay(listBtn, slideshowBtn, slideshowContainer, projectListContainer);
});
slideshowBtn.addEventListener("click", function(){
  changeDisplay(listBtn, slideshowBtn, slideshowContainer, projectListContainer);
});
