// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const HEADER_CONT = document.querySelector('.header-container');

function Header() {
  const HEADER = document.createElement('div');
        HEADER.classList.add('header');
        HEADER_CONT.append(HEADER);

  const DATE = document.createElement('span');
        DATE.classList.add('date');
        DATE.textContent = 'MARCH 28, 2019';
        HEADER.append(DATE);

  const H_ONE = document.createElement('h1');
        H_ONE.textContent = 'Lambda Times';
        HEADER.append(H_ONE);

  const TEMP = document.createElement('span');
        TEMP.classList.add('temp');
        TEMP.textContent = "98°";
        HEADER.append(TEMP);
}

Header();
