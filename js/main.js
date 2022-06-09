
const fixedHeader = () => {

  const header = document.querySelector('#header');
  const main = document.querySelector('#main');

  window.addEventListener('scroll', () => {
      const scrollPosition = this.window.scrollY;
      const mainHeight = main.scrollHeight;
      const menu = document.querySelector('.header__navigation');
      if( scrollPosition > mainHeight ) {
        header.classList.add('fixed');
        menu.style.right = "0px";
      } else {
        header.classList.remove('fixed');
        menu.style.right = "";
      }
    });
};

/*Smooth scrol */

const smoothScroll = () => {
  document.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.dataset.scroll;
    if( !id ) return
    const elemPosition = document.getElementById(id).offsetTop;
    window.scrollTo({
      top: elemPosition - 50,
      behavior: 'smooth'
    });
    const nav = document.querySelector('#header__navigation');
    nav.classList.remove('show');
  });
};

/*Toggle NavBar */

const toggleNavigation = () => {
  document.getElementById('toggleNav').addEventListener('click', () => {
    const nav = document.querySelector('#header__navigation');
    nav.classList.toggle('show');
    if(nav.classList.contains('show')) {
      nav.style.right = "0px";
    } else {
      nav.style.right = "";
    }
  })
}

/*Slider */

const charactersSlider = () => {
  const items = document.querySelectorAll('.select__character');

  for(let item of items) {
    item.addEventListener('click', (e) => {
      document.querySelector('.characters__info__select .active').classList.remove('active');
      const item = e.target.closest('.select__character');
      item.classList.add('active');
      let id = item.getAttribute("id");
      document.querySelector('.characters__image__img').setAttribute('src', `./img/slider/${id}`);
    });
  };
};

/*Go Up Btn Visible */

const goUpBtn = () => {
  window.addEventListener('scroll', () => {

    const elem = document.querySelector('.benefits');
    const elemPos = elem.getBoundingClientRect().top;

    if( elemPos < 0 ) {
      document.querySelector('.go__up').classList.add('go__show');
    } else {
      document.querySelector('.go__up').classList.remove('go__show');
    }
  });

};


const trigger = document.querySelector('.btn__header'),
        modal = document.querySelector('.modal');

const showModal = () => {
  trigger.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
};

const hideModal = () => {
  modal.addEventListener('click', (e) => {
    const target = e.target;
    if(modal == target) {
      modal.style.display = 'none';
    }
  });
};


smoothScroll();
fixedHeader();
toggleNavigation();
charactersSlider();
goUpBtn();
showModal();
hideModal();
