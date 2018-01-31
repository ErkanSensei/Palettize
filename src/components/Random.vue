<template>
  <div class='hello'>
    <div v-for='colorStyle in colorStyles'>
      <div v-for='color in colorStyle' :style='{backgroundColor: color}' :key='color'>
        <h1>{{ color }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import tinycolor from 'tinycolor2';
import randomColor from '../utils/randomColor';

export default {
  name: 'HelloWorld',
  data() {
    return {
      colorStyles: [],
      showModal: true,
    };
  },
  watch: {
    $route() {
      this.colorStyles = [];
      for (let i = 0; i < 10; i += 1) {
        this.generateRandomColor();
      }
    },
  },
  methods: {
    generateRandomColor() {
      const initialColor = tinycolor(this.$route.params.hexcode);
      const colorStyles = this.colorStyles.slice();
      const newColorStyles = [];
      newColorStyles.push(tinycolor(this.$route.params.hexcode).toRgbString());

      for (let i = 0; i < 5; i += 1) {
        const newColor = randomColor.generateRandomColor(initialColor).getOriginalInput();
        newColorStyles.push(`rgb(${Math.floor(newColor.r)}, ${Math.floor(newColor.g)}, ${Math.floor(newColor.b)})`);
      }
      colorStyles.push(newColorStyles);
      this.colorStyles = colorStyles;
      // this.divStyle.fontSize = Math.floor(Math.random() * 100) + 'px';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  height: 100%;
  margin-top: 8vh;
}
</style>
