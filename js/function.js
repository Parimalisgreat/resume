$(window).scroll(function(){
  $('nav').toggleClass('scrolled',$(this).scrollTop()>100);
})
// function gets rid of Loader
window.addEventListener('load',()=>{
  const preload=document.querySelector(".preload");
  preload.classList.add('preload-finish');
});
 //tooltip
 $(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
