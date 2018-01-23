import tinycolor from 'tinycolor2';

export default {
  generateRandomColor: (mix) => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    red += mix._r / 2;
    green += mix._g / 2;
    blue += mix._b / 2;
    return tinycolor(`rgb(${red}, ${green}, ${blue}`);
  },
};
