const moreProducts = [
  {
    image: './Assets/images/Powder.jpg',
    imageBoard: './Assets/images/SVG/Chess_Board.svg',
    name: 'Powder',
    description: 'Poreless Primer Blurmax Pore-minimize Primer',
    moreText: 'more text goes here',
  },
  {
    image: './Assets/images/Mascara.jpg',
    imageBoard: './Assets/images/SVG/Chess_Board.svg',
    name: 'Mascara',
    description: 'Volume Length Mascara',
    moreText: 'more text goes here',
  },
  {
    image: './Assets/images/Eyeliner.jpg',
    imageBoard: './Assets/images/SVG/Chess_Board.svg',
    name: 'Eyeliner',
    description: 'Intense Waterproof Eyeliner',
    moreText: 'more text goes here',
  },
];

const moreDiv = document.querySelector('.moreProd');
moreDiv.innerHTML = moreProducts
  .map((x) => `
    <div class='realProduct'>
        <img class='productImage' src='${x.image}'>
        <img class='productImageBoard' src='${x.imageBoard}'>
        <div class='productDescription'>
        <h4 class='prodName2'>${x.name}</h4>
        <h4 class='prodText2'>${x.description}</h4>
        <p class='prodMoreText'> ${x.moreText}</p>
        </div>
    </div>

`);

// eslint-disable-next-line no-unused-vars
function showMore() {
  const moreBtn = document.querySelector('.moreProd');
  moreBtn.classList.toggle('moreShow');
}
