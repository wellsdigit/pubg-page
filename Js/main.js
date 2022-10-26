const left= document.getElementById('left');
const right= document.getElementById('right');
const images = document.querySelectorAll('.img-bg-box');
const xText= document.querySelectorAll('.word');
const body = document.querySelector('body');



// console.log(images[0])

// console.log(images[0].classList)
const goLeft = ()=>{
    if (images[0].className.includes("active")){
        xText[0].classList.remove('tshiftr');
        xText[0].classList.remove('left');
        xText[1].classList.remove('tshifts');
        images[2].classList.remove('w-100','right-bottom');
        images[0].classList.remove('shift-right');
        images[1].classList.remove('w-100');
        images[2].classList.remove('right-bottom');
        images[2].classList.remove('transx');




        images[1].classList.add('w-25','right-bottom')
        images[2].classList.remove('left-bottom')
        images[2].classList.add('right-bottom')
        xText[0].classList.add('right')
        xText[1].classList.add('left')
        images[0].classList.remove('active')
        images[2].classList.add('active')
    }else if(images[1].className.includes("active")){
        images[2].classList.remove('transx');
        images[2].classList.remove('w-100');
        images[2].classList.add('w-25');
        xText[0].classList.remove('tshiftr');
        xText[1].classList.remove('tshifts');

        images[1].classList.remove('active', 'w-25', 'right-bottom');
        images[1].style.bottom='0';
        images[2].classList.remove('active');
        xText[1].classList.remove('left');
        xText[0].classList.remove('right');
        images[1].classList.add('w-100', 'top-left')
        images[2].classList.remove('right-bottom')
        images[2].classList.add('left-bottom')
        xText[0].classList.add('left')
        xText[1].classList.add('right')
        images[0].classList.add('active')
    }else{
        images[2].classList.remove('right-bottom', 'left-bottom');
        images[2].style.bottom='0';
        images[2].classList.add('transx');

        images[0].classList.add('shift-right');
        xText[0].classList.remove('right');
        xText[1].classList.remove('left');
        xText[0].classList.add('tshiftr');
        xText[1].classList.add('tshifts');
        images[2].classList.add('w-100','right-bottom')
        images[2].classList.add('right-bottom')
        images[2].classList.remove('active')
        images[1].classList.add('active')
    }
}


const firstImg=()=>{
        xText[0].classList.remove('tshiftr');
        xText[0].classList.remove('left');
        xText[1].classList.remove('tshifts');
        images[2].classList.remove('w-100','right-bottom');
        images[0].classList.remove('shift-right');
        images[1].classList.remove('w-100');
        images[2].classList.remove('right-bottom');
        images[2].classList.remove('transx');


        images[1].classList.add('w-25','right-bottom')
        images[2].classList.remove('left-bottom')
        images[2].classList.add('right-bottom')
        xText[0].classList.add('right')
        xText[1].classList.add('left')
        images[0].classList.remove('active')
        images[2].classList.add('active')
        body.style.background=`url(images/bg.png)`
        body.classList.add('tsec')
        body.style.backgroundSize='cover'
        body.style.backgroundPosition="right bottom, left top"

        
}

const secImg=()=>{
    images[2].classList.remove('transx');
    images[2].classList.remove('w-100');
    images[2].classList.add('w-25');
    xText[0].classList.remove('tshiftr');
    xText[1].classList.remove('tshifts');

    images[1].classList.remove('active', 'w-25', 'right-bottom');
    images[1].style.bottom='0';
    images[2].classList.remove('active');
    xText[1].classList.remove('left');
    xText[0].classList.remove('right');
    images[1].classList.add('w-100', 'top-left')
    images[2].classList.remove('right-bottom')
    images[2].classList.add('left-bottom')
    xText[0].classList.add('left')
    xText[1].classList.add('right')
    images[0].classList.add('active');
    body.style.background=`url(images/40f24e8c5df85fcd65f2a74822ba7f6e.png)`;
    body.classList.add('tsec')
    body.style.backgroundSize='cover'
    body.style.backgroundPosition="right bottom, left top"

}

const thirdImg=()=>{
    images[2].classList.remove('right-bottom', 'left-bottom');
        images[2].style.bottom='0';
        images[2].classList.add('transx');

        images[0].classList.add('shift-right');
        xText[0].classList.remove('right');
        xText[1].classList.remove('left');
        xText[0].classList.add('tshiftr');
        xText[1].classList.add('tshifts');
        images[2].classList.add('w-100','right-bottom')
        images[2].classList.add('right-bottom')
        images[2].classList.remove('active')
        images[1].classList.add('active')
        body.style.background=`url(images/cyberpunk-girl-in-a-gas-mask-looking-at-the-glowing-butterfly-landed-on-her-finger-4k-e7-1920x1080.png)`;
        body.classList.add('tsec')
        body.style.backgroundSize='cover'
        body.style.backgroundPosition="right bottom, left top"
}