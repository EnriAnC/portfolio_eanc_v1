const leftPupil = document.querySelector(".eye.left > .pupil");
const rightPupil = document.querySelector(".eye.right > .pupil");
const mouth = document.querySelector('.mouth')

document.onmousemove = ev => {
  leftPupil.style.left = ev.x / window.innerWidth * 100 + "%";  
  leftPupil.style.top = ev.y / window.innerHeight * 100 + "%";

  rightPupil.style.left = ev.x / window.innerWidth * 100 + "%"; 
  rightPupil.style.top = ev.y / window.innerHeight * 100 + "%";

  mouth.style.left = 50 + ev.x / window.innerWidth * 100 /6 + "%";  
  mouth.style.top = 45 + ev.y / window.innerHeight * 100 /6 + "%";
  
};
