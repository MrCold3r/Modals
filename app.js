let openBtn = document.querySelector('.show_modal');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close_modal');

openBtn.addEventListener('click', function(){
modal.classList.add('showmodal')
});
closeBtn.addEventListener('click', function(){
    modal.classList.remove('showmodal')
});