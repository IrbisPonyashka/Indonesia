const slideimages = document.querySelector('.section__bromo-box');
let slideNext = document.querySelector('.icon_right'),
    slidePrev = document.querySelector('.icon_left'),
    img = document.querySelectorAll('.section__bromo-img');

    
slideNext.addEventListener('click', ()=> slider(slideNext));
slidePrev.addEventListener('click', ()=> slider(slidePrev));

slideimages.addEventListener('mouseover', () => clearInterval(interval))
slideimages.addEventListener('mouseout', () => interval = setInterval(() => slider(slideNext),3000))

let interval = setInterval(() => slider(slideNext),3000);

let index = 0;
function slider(btn){
    img.forEach(el => el.classList.remove('active'));
    if(btn == slideNext){
        index++;
        if(index == img.length){
            index = 0;
        }
    }
    if(btn == slidePrev){
        index--;
        if(index < 0){
            index = img.length-1
        }
    }
    img[index].classList.add('active');
}   
