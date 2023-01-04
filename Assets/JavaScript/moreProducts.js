const moreProducts = [
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
  const arrowdown = document.querySelector('.down');
  const moreBtn = document.querySelector('.moreProd');
  moreBtn.classList.toggle('moreShow');
  arrowdown.classList.toggle('up');
}
