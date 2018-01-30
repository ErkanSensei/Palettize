import tinycolor from 'tinycolor2';

export default {
  generateRandomColor: (mix) => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    // Converts the inputted color into a RGB object
    const mixRgbObj = mix.toRgb();

    red += mixRgbObj.r / 2;
    green += mixRgbObj.g / 2;
    blue += mixRgbObj.b / 2;

    return tinycolor({ r: red, g: green, b: blue });
  },
};
