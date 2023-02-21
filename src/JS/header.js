export function mobileMenu (){
    let btnModal = document.querySelector('.menu')
    let modalWindow = document.querySelector('.mobile-menu__container')
    let coverHero = document.querySelector('.hero__container')

    const toggleMenu = () => {
        modalWindow.classList.toggle('mobile-menu__container--closed');
        coverHero.classList.toggle('hero--closed')
    }
  const closeOnESC = (e) => {
      if (e.keyCode === 27) {
        modalWindow.classList.add('mobile-menu__container--closed')
        coverHero.classList.remove('hero--closed')
        btnModal.classList.remove('opened')
      }
  }
  const closeOnClick = (e) => {
    e.stopPropagation();
      modalWindow.classList.add('mobile-menu__container--closed')
      coverHero.classList.remove('hero--closed')
      btnModal.classList.remove('opened')

  }

    modalWindow.addEventListener('click', closeOnClick)
    document.body.addEventListener('keydown', closeOnESC);
    btnModal.addEventListener('click', toggleMenu);

      window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    modalWindow.classList.add('mobile-menu__container--closed');
    coverHero.classList.remove('hero--closed')

  });
}


export function submitForm (){
  let btnModal = document.querySelector('.hero__button')
  let modalWindow = document.querySelector('.hero__backdrop')
  let coverHero = document.querySelector('.hero__container')
  let closeBtn = document.querySelector('.modal__button-close')
  let submitBtn = document.querySelector('.submitButton')

  let subBtnTours = document.querySelector('.tours__button--pay')

  const openSubmitForm = () => {
    modalWindow.classList.remove('is-hidden');
    coverHero.classList.add('hero--closed')
  }
  const closeSubmitForm=()=>{
    modalWindow.classList.add('is-hidden')
    coverHero.classList.remove('hero--closed')
  }
  const closeOnESC = (e) => {
      if (e.keyCode === 27) {
    modalWindow.classList.add('is-hidden')
    coverHero.classList.remove('hero--closed')
      }
  }
  // const closeOnClick = (e) => {
  //   e.stopPropagation();
  //   if (e.target === `<button>`) {
  //     console.log(e.currentTarget);
  //     console.log(e.target);
  //     modalWindow.classList.add('is-hidden')
  //     coverHero.classList.remove('hero--closed')
  //   }

  // }

    // modalWindow.addEventListener('click', closeOnClick)
    document.body.addEventListener('keydown', closeOnESC);
    

  btnModal.addEventListener('click', openSubmitForm);
  closeBtn.addEventListener('click', closeSubmitForm)
  submitBtn.addEventListener('click', closeSubmitForm)

  subBtnTours.addEventListener('click', openSubmitForm);

}