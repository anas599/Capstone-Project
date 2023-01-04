const featuredProducts11 = [
  {
    image: './Assets/images/ProgramLogos/program_icon_01 1.svg',
    name: 'Foundation',
    description: 'Ultimate Matte Foundation',
  },
  {
    image: './Assets/images/ProgramLogos/program_icon_02 1.svg',
    name: 'Primer',
    description: 'Volume Length Mascara',
  },
  {
    image: './Assets/images/ProgramLogos/program_icon_03 1.svg',
    name: 'Powder',
    description: 'Poreless Primer Blurmax Pore-minimize Primer',
  },
  {
    image: './Assets/images/ProgramLogos/program_icon_04 1.svg',
    name: 'Mascara',
    description: 'Volume Length Mascara',
  },
  {
    image: './Assets/images/ProgramLogos/program_icon_05 1.svg',
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