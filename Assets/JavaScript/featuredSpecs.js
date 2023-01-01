const featuredProducts11 = [
  {
    image: './Assets/images/SVG/lipstick-icon.svg',
    name: 'Foundation',
    description: 'Ultimate Matte Foundation',
  },
  {
    image: './Assets/images/SVG/makeup-icon.svg',
    name: 'Primer',
    description: 'Volume Length Mascara',
  },
  {
    image: './Assets/images/SVG/beauty-icon.svg',
    name: 'Powder',
    description: 'Poreless Primer Blurmax Pore-minimize Primer',
  },
  {
    image: './Assets/images/SVG/compact-mirror-icon.svg',
    name: 'Mascara',
    description: 'Volume Length Mascara',
  },
  {
    image: './Assets/images/SVG/makeup-brushes-icon.svg',
    name: 'Eyeliner',
    description: 'Intense Waterproof Eyeliner',
  },
];

const makeUpDiv = document.querySelector('.mainSpecs');

makeUpDiv.innerHTML = featuredProducts11
  .map(
    (x) => `
    <div class='prd1'>
        <img class='svgImage' src='${x.image}'>
        <h4 class='prodName'>${x.name}</h4>
        <h4 class='prodText'>${x.description}</h4>
    </div>
    <br>
    `,
  )
  .join('');