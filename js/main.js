var typed = new Typed('#element', {
    strings: ['Designer', 'Developer', 'Frelancer','Photographer'],
    typeSpeed: 50,
    backSpeed:50,
    loop:true
});


let aboutOffset = $('.about').offset().top;
let navHeight = $('nav').outerHeight();

let prevScroll=window.pageYOffset;

$(window).scroll(function(){

    let currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {

        $('nav').css("backgroundColor","#333");
        $('nav').css("transform","translateY(0)");
        $('nav').css("zIndex","1000");
    }
    else {
        $('nav').css("backgroundColor","transparent");
        $('nav').css("transform","translateY(-102%)");
    }
    prevScroll = currentScroll;
    if($(window).scrollTop()==0){
        $('nav').css("backgroundColor","transparent");
    }
})




let portfolioImgs=['images/portfolio/1.jpg','images/portfolio/4.jpg','images/portfolio/6.jpg'];

let clickedEle=document.querySelectorAll('.portfolio .container-fluid .row .col-sm-6 .item .port-info.img');

let LayerImages=$('.portfolio .container-fluid .img-layer');
let imgLayer=document.querySelector('.portfolio .container-fluid .img-layer .ImgLayer');
let closeIcon=document.querySelector('.portfolio .container-fluid .img-layer .ImgLayer .fa-close');
let rightIcon=document.querySelector('.portfolio .container-fluid .img-layer .ImgLayer .fa-arrow-right');
let leftIcon=document.querySelector('.portfolio .container-fluid .img-layer .ImgLayer .fa-arrow-left');
let index=document.querySelector('.portfolio .container-fluid .img-layer p span');
let currentSrc;
let currentIndex;

for (let i = 0; i < clickedEle.length; i++) {
    clickedEle[i].addEventListener('click',function(){
        LayerImages.slideDown(500,function(){
            LayerImages.css('display','flex')
            $('.portfolio .container-fluid .img-layer .ImgLayer').fadeIn(500,function(){
                $('.portfolio .container-fluid .img-layer p').fadeIn(500);
            })
        });
        document.querySelector('body').style.overflow='hidden';
        currentSrc=clickedEle[i].previousElementSibling.getAttribute('src');
        imgLayer.style.backgroundImage=`url("${currentSrc}")`;
        for (let i = 0; i < portfolioImgs.length; i++) {
            if(currentSrc==portfolioImgs[i]){
                currentIndex=i;
                index.innerHTML=currentIndex+1;
            }
        }
    })
}

function nextImg(){
    currentIndex++;
    if(currentIndex==portfolioImgs.length){
        currentIndex=0;
    }
    imgLayer.style.backgroundImage=`url("${portfolioImgs[currentIndex]}")`;
    index.innerHTML=currentIndex+1;
}
rightIcon.addEventListener('click',nextImg);


function prevImg(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=portfolioImgs.length-1;
    }
    imgLayer.style.backgroundImage=`url("${portfolioImgs[currentIndex]}")`;
    index.innerHTML=currentIndex+1;
}
leftIcon.addEventListener('click',prevImg);


function closeLayer(){

    $('.portfolio .container-fluid .img-layer p').fadeOut(400,function(){
        $('.portfolio .container-fluid .img-layer .ImgLayer').fadeOut(400,function(){
            LayerImages.slideUp(400,function(){
                document.querySelector('body').style.overflow='visible';
            })
        })
    });
}
closeIcon.addEventListener('click',closeLayer)

document.addEventListener('keydown',function(e){
    if(e.code=='ArrowRight'){
        nextImg();
    }
    else if(e.code=='ArrowLeft'){
        prevImg();
    }
    else if(e.code=='Space'){
        closeLayer();
    }
})

let layer = document.querySelector('.portfolio .container-fluid .img-layer');
layer.addEventListener('click',function(e){
    if(e.target==layer){
        closeLayer();
    }
})


let videoEle=document.querySelector('.portfolio .container-fluid .row .col-sm-6 .item .port-info.video');
let videoLayer=$('.portfolio .container-fluid .video-layer');
let closeIconVideo=document.querySelector('.portfolio .container-fluid .video-layer .videoLayer .fa-close');

videoEle.addEventListener('click',function(){
    videoLayer.slideDown(500,function(){
        videoLayer.css('display','flex')
        $('video').fadeIn(500)
        document.querySelector('body').style.overflow='hidden';
    })
})
closeIconVideo.addEventListener('click',function(){
    $('video').fadeOut(400,function(){
        videoLayer.slideUp(400,function(){
            document.querySelector('body').style.overflow='visible';
        })
    })
})


let projectEle=document.querySelectorAll('.portfolio .container-fluid .row .col-sm-6 .item .port-info.project');
let projectLayer=$('.portfolio .container-fluid .project-layer');
let closeIconProject=document.querySelector('.portfolio .container-fluid .project-layer .projectLayer .fa-close');

for (let i = 0; i < projectEle.length; i++) {
    projectEle[i].addEventListener('click',function(){
        projectLayer.slideDown(500,function(){
            document.querySelector('body').style.overflow='hidden';
            $('.portfolio .container-fluid .project-layer div.projectLayer').fadeIn(500)
        })
        let CurrentSrc=projectEle[i].previousElementSibling.getAttribute('src');
    document.querySelector('.portfolio .container-fluid .project-layer .projectLayer img').setAttribute('src',CurrentSrc);
    })
}
closeIconProject.addEventListener('click',function(){
    $('.portfolio .container-fluid .project-layer div.projectLayer').fadeOut(400,function(){
        projectLayer.slideUp(400,function(){
            document.querySelector('body').style.overflow='visible';
        })
    })
})


$('.list').click(function(){
    const val=$(this).attr('data-filter');
    if(val=='all'){
        $('.portfolio .container-fluid .row .col-sm-6.col-md-4').show(500);
    }
    else{
        $('.portfolio .container-fluid .row .col-sm-6.col-md-4').not('.'+val).hide(500);
        $('.portfolio .container-fluid .row .col-sm-6.col-md-4').filter('.'+val).show(500);
    }
})
$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})

nums=document.querySelectorAll('.portfolio .counting .counter');
let counting=document.querySelector('.portfolio .counting').offsetTop;
let galleryImages=$('.portfolio .gallery-images').offset().top;
let started=false;

window.onscroll=function(){
    if(window.scrollY>=counting-galleryImages){
        new PureCounter();
    }
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        dots:true,
    });
});
