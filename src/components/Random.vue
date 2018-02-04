<template>
  <div class='hello' v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div v-for='colorStyle in colorStyles' class='palette' :key='colorStyle'>
      <div v-for='color in colorStyle' class='colorDiv' :style='{backgroundColor: color}' :key='color'>
        <h1>{{ color }}</h1>
      </div>
      <div>HEART</div>
      <div>EXAMPLE</div>
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
  mounted() {
    this.colorStyles = [];
    this.loadMore();
  },
  watch: {
    $route() {
      this.colorStyles = [];
      this.loadMore();
    },
  },
  methods: {
    generateRandomColor() {
      const initialColor = tinycolor(this.$route.params.hexcode);
      const colorStyles = this.colorStyles.slice();
      const newColorStyles = [];
      newColorStyles.push(tinycolor(this.$route.params.hexcode).toHexString());

      for (let i = 0; i < 4; i += 1) {
        const newColor = randomColor.generateRandomColor(initialColor).toHexString();
        newColorStyles.push(newColor);
      }
      colorStyles.push(newColorStyles);
      this.colorStyles = colorStyles;
      // this.divStyle.fontSize = Math.floor(Math.random() * 100) + 'px';
    },
    loadMore() {
      for (let i = 0; i < 10; i += 1) {
        this.generateRandomColor();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  margin-top: 10vh;
}
.palette {
  width: 350px;
  margin: auto;
  height: 40vh;
  margin-top: 8vh;
  display: inline-block;
  box-shadow: 0px 10px 40px -10px rgba(0,64,128,0.2);
}
.colorDiv {
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 420px) {
  .palette {
    margin-left: 80px;
    margin-right: 80px;
  }
}
</style>
