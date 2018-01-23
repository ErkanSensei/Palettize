<template>
  <div class='hello'>
    <button v-on:click='this.generateRandomColor'>Generate</button>
    <div v-for='colorStyle in colorStyles' :style='{backgroundColor: colorStyle}'>
      <h1>{{ colorStyle }}</h1>
    </div>
  </div>
</template>

<script>
import tinycolor from 'tinycolor2';
import randomColor from '../utils/randomColor';

export default {
  name: 'HelloWorld',
  mounted() {
  },
  data() {
    return {
      colorStyles: [
        {
          backgroundColor: 'rgb(0,0,0)',
        },
        {
          backgroundColor: 'rgb(0,0,0)',
        },
        {
          backgroundColor: 'rgb(0,0,0)',
        },
        {
          backgroundColor: 'rgb(0,0,0)',
        },
        {
          backgroundColor: 'rgb(0,0,0)',
        },
      ],
    };
  },
  methods: {
    generateRandomColor() {
      const initialColor = tinycolor('rgb(220,69,71)');
      const colorStyles = this.colorStyles.slice();
      const newColorStyles = colorStyles.map((colorStyle)=> {
        const newColor = randomColor.generateRandomColor(initialColor);
        return `rgb(${Math.floor(newColor._r)}, ${Math.floor(newColor._g)}, ${Math.floor(newColor._b)})`;
      })
      newColorStyles[0] = 'rgb(220,69,71)';
      this.colorStyles = newColorStyles;
      console.log(this.colorStyles)
      // this.divStyle.fontSize = Math.floor(Math.random() * 100) + 'px';
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  height: 100%;
}
</style>
