/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// PLACING IMAGES WITHIN ARRAY
let images = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

// SETTING START OF IMAGES TO THE 0 INDEX
let index = 0;

const CAR_CONT = document.querySelector('.carousel-container');
const IMG_ONE = document.createElement('img');

// SETTING SRC TO IMAGES INDEX
function render() {
  IMG_ONE.src = images[index];
}

// RENDERING IMAGES CURRENT INDEX TO SCREEN
render();

// CREATING ELEMENTS AND EVENT LISTENERS
function carousel() {

  const CAROUSEL = document.createElement('div');
        CAROUSEL.classList.add('carousel');
        CAR_CONT.append(CAROUSEL);

  const LEFT = document.createElement('div');
        LEFT.classList.add('left-button');
        LEFT.textContent = '<';
        CAROUSEL.append(LEFT);
        LEFT.addEventListener('click', () => {
          if(index > 0) {
            index--;
          } else {
            index = images.length - 1;
          }
          render();
        });

  CAROUSEL.append(IMG_ONE);

  const RIGHT = document.createElement('div');
        RIGHT.classList.add('right-button');
        RIGHT.textContent = '>';
        CAROUSEL.append(RIGHT);
        RIGHT.addEventListener('click', () => {
          if(index < images.length - 1) {
            index++;
          } else {
            index = 0;
          }
          render();
        });
}

carousel();
