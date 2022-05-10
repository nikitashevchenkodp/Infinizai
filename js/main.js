
const fixedHeader = () => {

  const header = document.getElementById('header');
  const main = document.getElementById('main');

  window.addEventListener('scroll', () => {
      const scrollPosition = this.window.scrollY;
      const mainHeight = main.scrollHeight;

      if( scrollPosition > mainHeight ) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
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
    const nav = document.getElementById('header__navigation');
    nav.classList.remove('show');
  });
};

/*Toggle NavBar */

const toggleNavigation = () => {
  document.getElementById('toggleNav').addEventListener('click', () => {
    const nav = document.getElementById('header__navigation');
    nav.classList.toggle('show');
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


smoothScroll();
fixedHeader();
toggleNavigation();
charactersSlider();
goUpBtn();

const obj1 = {
  a: 1,
  b: 2,
  c: 3
}

const obj2 = {...obj1, d:4}

console.log(obj1)
console.log(obj2)