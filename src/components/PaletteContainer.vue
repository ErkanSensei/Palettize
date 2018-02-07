<template>
  <div class='hello' v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div v-for='colorStyle in colorStyles' class='palette' :key='colorStyle.toString()'>
      <div v-for='color in colorStyle' class='colorDiv' :style='{backgroundColor: color}' :key='color'>
        <h1>{{ color }}</h1>
      </div>
      <div id='likeButton'>HEART</div>
      <div id='esampleButton'>EXAMPLE</div>
    </div>
  </div>
</template>

<script>
import tinycolor from 'tinycolor2';
import colorAlgos from '../utils/colorAlgos';

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
    generateRandomMix(color) {
      const initialColor = tinycolor(color);
      const colorStyles = this.colorStyles.slice();
      const newColorStyles = [];
      newColorStyles.push(tinycolor(color).toHexString());

      for (let i = 0; i < 4; i += 1) {
        const newColor = colorAlgos.generateRandomColor(initialColor).toHexString();
        newColorStyles.push(newColor);
      }
      colorStyles.push(newColorStyles);
      this.colorStyles = colorStyles;
      // this.divStyle.fontSize = Math.floor(Math.random() * 100) + 'px';
    },
    loadMore() {
      for (let i = 0; i < 10; i += 1) {
        this.generateRandomMix(this.$route.params.hexcode === 'random' ? tinycolor.random() : this.$route.params.hexcode);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  margin-top: 8vh;
  background-color: #FAFAFA;
}
.palette {
  width: 350px;
  margin: auto;
  height: 40vh;
  margin-top: 4vh;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  display: inline-block;
  box-shadow: 0px 10px 40px -10px rgba(0,64,128,0.1);
}
.colorDiv {
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
}

@media (min-width: 420px) {
  .palette {
    margin-left: 80px;
    margin-right: 80px;
  }
}

@media (max-width: 419px) {
  .palette {
    margin-top: 4vh;
    width: 80%;
    height: 60vh;
  }
}
</style>
