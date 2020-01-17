// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'));

const CARDS = document.querySelector('.cards-container');

function cards(obj) {

  for (const [key, value] of Object.entries(obj)) {
    value.forEach( (art) => {

      const CARD = document.createElement('div');
            CARD.classList.add('card');
            CARDS.append(CARD);

      const HEADLINE = document.createElement('div');
            HEADLINE.classList.add('headline');
            HEADLINE.textContent = art.headline
            // console.log(value.forEach(a => a));
            CARD.append(HEADLINE);

      const AUTHOR = document.createElement('div');
            AUTHOR.classList.add('author');
            CARD.append(AUTHOR);

      const IMG_CONT = document.createElement('div');
            IMG_CONT.classList.add('img-container');
            AUTHOR.append(IMG_CONT);

      const IMG = document.createElement('img');
            IMG.src = art.authorPhoto;
            IMG_CONT.append(IMG);

      const NAME = document.createElement('span')
            NAME.textContent = art.authorName;
            AUTHOR.append(NAME);
    });
  }
  // obj.articles.bootstrap.map( article => {
  //   const CARD = document.createElement('div');
  //         CARD.classList.add('card');
  //         CARDS.append(CARD);
  //
  //   const HEADLINE = document.createElement('div');
  //         HEADLINE.classList.add('headline');
  //         HEADLINE.textContent = article.headline
  //         CARD.append(HEADLINE);
  //
  //   const AUTHOR = document.createElement('div');
  //         AUTHOR.classList.add('author');
  //         CARD.append(AUTHOR);
  //
  //   const IMG_CONT = document.createElement('div');
  //         IMG_CONT.classList.add('img-container');
  //         AUTHOR.append(IMG_CONT);
  //
  //   const IMG = document.createElement('img');
  //         IMG.src = article.authorPhoto;
  //         IMG_CONT.append(IMG);
  //
  //   const NAME = document.createElement('span')
  //         NAME.textContent = article.authorName;
  //         AUTHOR.append(NAME);
  // });
  // obj.articles.technology.map( article => {
  //   const CARD = document.createElement('div');
  //         CARD.classList.add('card');
  //         CARDS.append(CARD);
  //
  //   const HEADLINE = document.createElement('div');
  //         HEADLINE.classList.add('headline');
  //         HEADLINE.textContent = article.headline
  //         CARD.append(HEADLINE);
  //
  //   const AUTHOR = document.createElement('div');
  //         AUTHOR.classList.add('author');
  //         CARD.append(AUTHOR);
  //
  //   const IMG_CONT = document.createElement('div');
  //         IMG_CONT.classList.add('img-container');
  //         AUTHOR.append(IMG_CONT);
  //
  //   const IMG = document.createElement('img');
  //         IMG.src = article.authorPhoto;
  //         IMG_CONT.append(IMG);
  //
  //   const NAME = document.createElement('span')
  //         NAME.textContent = article.authorName;
  //         AUTHOR.append(NAME);
  // });
  // obj.articles.jquery.map( article => {
  //   const CARD = document.createElement('div');
  //         CARD.classList.add('card');
  //         CARDS.append(CARD);
  //
  //   const HEADLINE = document.createElement('div');
  //         HEADLINE.classList.add('headline');
  //         HEADLINE.textContent = article.headline
  //         CARD.append(HEADLINE);
  //
  //   const AUTHOR = document.createElement('div');
  //         AUTHOR.classList.add('author');
  //         CARD.append(AUTHOR);
  //
  //   const IMG_CONT = document.createElement('div');
  //         IMG_CONT.classList.add('img-container');
  //         AUTHOR.append(IMG_CONT);
  //
  //   const IMG = document.createElement('img');
  //         IMG.src = article.authorPhoto;
  //         IMG_CONT.append(IMG);
  //
  //   const NAME = document.createElement('span')
  //         NAME.textContent = article.authorName;
  //         AUTHOR.append(NAME);
  // });
  // obj.articles.node.map( article => {
  //   const CARD = document.createElement('div');
  //         CARD.classList.add('card');
  //         CARDS.append(CARD);
  //
  //   const HEADLINE = document.createElement('div');
  //         HEADLINE.classList.add('headline');
  //         HEADLINE.textContent = article.headline
  //         CARD.append(HEADLINE);
  //
  //   const AUTHOR = document.createElement('div');
  //         AUTHOR.classList.add('author');
  //         CARD.append(AUTHOR);
  //
  //   const IMG_CONT = document.createElement('div');
  //         IMG_CONT.classList.add('img-container');
  //         AUTHOR.append(IMG_CONT);
  //
  //   const IMG = document.createElement('img');
  //         IMG.src = article.authorPhoto;
  //         IMG_CONT.append(IMG);
  //
  //   const NAME = document.createElement('span')
  //         NAME.textContent = article.authorName;
  //         AUTHOR.append(NAME);
  // });

}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then( src => cards(src.data.articles));
