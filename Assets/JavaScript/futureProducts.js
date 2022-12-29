const featuredProducts = [
  {
    image: './Assets/images/foundation1.jpg',
    imageBoard: './Assets/images/SVG/Chess_Board.svg',
    name: 'Foundation',
    description: 'Ultimate Matte Foundation',
    moreText: 'more text goes here',
  },
  {
    image: './Assets/images/Mascara.jpg',
    imageBoard: './Assets/images/SVG/Chess_Board.svg',
    name: 'Primer',
    description: 'Volume Length Mascara',
    moreText: 'more text goes here',
  },
];

const makeUpDiv1 = document.querySelector('.realProd');

makeUpDiv1.innerHTML = featuredProducts
  .map(
    (x) => `
    <div class='realProduct'>
        <img class='productImage' src='${x.image}'>
        <img class='productImageBoard' src='${x.imageBoard}'>
        <div class='productDescription'>
        <h4 class='prodName2'>${x.name}</h4>
        <h4 class='prodText2'>${x.description}</h4>
        <p class='prodMoreText'> ${x.moreText}</p>
        </div>
        </div>
    <br>
    `,
  )
  .join('');
