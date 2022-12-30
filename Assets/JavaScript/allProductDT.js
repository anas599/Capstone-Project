const allProductDT = [
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
  {
    image: './Assets/images/Powder.jpg',
    imageBoard: './Assets/images/chess_grey.png',
    name: 'Powder',
    description: 'Ultra Mass Pressed Powder',
    moreText:
      "Rebellion's powder was a must-have for anyone looking to set their makeup and achieve a long-lasting, matte finish. Its skin-loving ingredients and multitasking abilities made it a standout product in the cosmetics industry.",
  },
  {
    image: './Assets/images/Mascara.jpg',
    imageBoard: './Assets/images/chess_grey.png',
    name: 'Mascara',
    description: 'Volume Length Mascara',
    moreText:
      "Whether you were looking for a natural, everyday mascara or something bold and dramatic for a special occasion, Rebellion's mascara had you covered. Its nourishing ingredients and impressive performance made it a standout product in the cosmetics industry.",
  },
  {
    image: './Assets/images/Eyeliner.jpg',
    imageBoard: './Assets/images/chess_grey.png',
    name: 'Eyeliner',
    description: 'Intense Waterproof Eyeliner',
    moreText:
      "Whether you were looking to create a subtle, natural eyeliner look or something bold and dramatic, Rebellion's eyeliner had you covered. Its creamy, long-lasting formula and skin-loving ingredients made it a standout product in the cosmetics industry.",
  },
  {
    image: './Assets/images/eyeshadow.jpg',
    imageBoard: './Assets/images/chess_grey.png',
    name: 'EyeShadow',
    description: '18 Color Eyeshadow Pallet',
    moreText:
      "Whether you were looking to create a natural, everyday eyeshadow look or something bold and dramatic, Rebellion's eyeshadow had you covered. Its high-pigment, long-lasting colors and creamy, blendable formula made it a standout product in the cosmetics industry.",
  },
];

const allPrdDiv = document.querySelector('.allProductsDesktop');

allPrdDiv.innerHTML = allProductDT
  .map(
    (x) => `
    <div class='realProduct'>
        <img class='productImage' src='${x.image}'>
        <img class='productImageBoard' src='${x.imageBoard}'>
        <div class='productDescription'>
        <h4 class='prodName2'>${x.name}</h4>
        <h4 class='prodText2'>${x.description}</h4>
        <i class="fa-solid fa-dash">____</i>
        <p class='prodMoreText'> ${x.moreText}</p>
        </div>
        </div>
    <br>
    `,
  )
  .join('');
