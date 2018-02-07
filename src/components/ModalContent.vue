<template>
  <div id='modalContent'>
      <h1 v-if='random'><Icon name='random' scale=10 /></h1>
      <h1 v-if='random'>Randomize palettes?</h1>
      <chrome-picker v-else :value='defaultColorProps' @input='updateValue' />
      <button
        :style='{ backgroundColor: "#2C3E50" }'
        class='randomModalButton'
        @click='submit'
        v-if='random'
      >
        <p>Yup</p>
      </button>
      <button
        :style='{ backgroundColor: "#2C3E50" }'
        class='randomModalButton'
        @click='submit'
        v-if='random'
      >
        <p>Nope</p>
      </button>
      <button
        :style='{ backgroundColor: defaultColorProps.hex }'
        class='modalButton'
        @click='submit'
        v-else
      >
        <p>Submit</p>
      </button>
  </div>
</template>
<script>
import { Chrome } from 'vue-color';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/random';

export default {
  components: {
    'chrome-picker': Chrome,
    Icon,
  },
  props: ['closeModal', 'submitColor', 'random'],
  data() {
    return {
      defaultColorProps: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1,
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1,
      },
    };
  },
  methods: {
    updateValue(e) {
      this.defaultColorProps = e;
    },
    submit() {
      this.submitColor(this.defaultColorProps.hex);
    },
  },
};
</script>
<style scoped>
.vc-chrome {
  width: 100%;
  box-shadow: none;
}
.modalButton {
  margin: 25px;
  width: 250px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.randomModalButton {
  margin: 10px;
  width: 100px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#modalContent > h1 {
  font-size: 25px;
}
</style>
