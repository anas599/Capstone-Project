const featuredProducts = [
  {
    image: './Assets/images/foundation1.jpg',
    imageBoard: './Assets/images/chess_grey.png',
    name: 'Foundation',
    description: 'Ultimate Matte Foundation',
    moreText:
      'Rebellions foundation was a game-changer in the cosmetics industry, and it solidified the brands reputation as a leader in the world of makeup.',
  },
  {
    image: './Assets/images/primer.jpg',
    imageBoard: './Assets/images/chess_grey.png',
    name: 'Primer',
    description: 'Poreless Primer Blurmax Pore-Minimize Primer',
    moreText:
      "In addition to its skincare benefits, Rebellion's primer also had impressive staying power. Makeup applied over the primer stayed put all day, without fading or creasing, and customers reported that their skin looked fresher and more youthful as a result.",
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
