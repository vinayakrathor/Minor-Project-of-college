let Menu =document.querySelector('#menu-btn');
let Navbar=document.querySelector('.header .navbar');

Menu.onclick = () =>{
     Menu.classList.toggle('fa-times');
     Navbar.classList.toggle('active');

};
window.onscroll = () =>{
     Menu.classList.remove('fa-times');
     Navbar.classList.remove('active');

};
var swiper = new Swiper(".home-slider", {
     loop:true,
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviwes-slider", {
     loop:true,
     spaceBetween:20,
     autoHeight:true,
     grabCursor:true,
     breakpoints: {
      640:{
          slidesPerView: 1,
      },
      768:{
          slidesPerView: 1,
     },
     1024:{
          slidesPerView: 3,
     },
     }
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem =3;

loadMoreBtn.onclick = () =>{
     let boxes =[...document.querySelectorAll('.packages .box-container .box')];
     for (var i = currentItem; i < currentItem +3; i++){
          boxes[i].style.display = 'inline-block';
          console.log("hii")
     };
     currentItem +=3;
     if(currentItem >= boxes.length){
          loadMoreBtn.style.display = 'none';
     }

}
