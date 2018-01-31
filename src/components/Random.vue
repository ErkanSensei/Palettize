<template>
  <div class='hello'>
    <div v-for='colorStyle in colorStyles' :style='{backgroundColor: colorStyle}' :key='colorStyle'>
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
    console.log(this.$route.params);
  },
  data() {
    return {
      colorStyles: [
        'rgb(0,0,0)',
        'rgb(0,0,0)',
        'rgb(0,0,0)',
        'rgb(0,0,0)',
        'rgb(0,0,0)',
      ],
      showModal: true,
    };
  },
  watch: {
    $route(to, from) {
      console.log('from', from);
      console.log('to', to);
    }
  },
  methods: {
    generateRandomColor() {
      const initialColor = tinycolor('rgb(220,69,71)');
      const colorStyles = this.colorStyles.slice();
      const newColorStyles = colorStyles.map(() => {
        const newColor = randomColor.generateRandomColor(initialColor).getOriginalInput();
        return `rgb(${Math.floor(newColor.r)}, ${Math.floor(newColor.g)}, ${Math.floor(newColor.b)})`;
      });
      newColorStyles[0] = 'rgb(220,69,71)';
      this.colorStyles = newColorStyles;
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
