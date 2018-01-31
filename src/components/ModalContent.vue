<template>
  <div>
      <chrome-picker :value='defaultColorProps' @input='updateValue' />
      <button
        :style='{ backgroundColor: defaultColorProps.hex }'
        class='modalButton'
        @click='submit'
      >
        Submit
      </button>
      <button
        :style='{ backgroundColor: defaultColorProps.hex }'
        class='modalButton'
        @click='closeModal'
      >
        Cancel
      </button>
  </div>
</template>
<script>
import { Chrome } from 'vue-color';

export default {
  components: {
    'chrome-picker': Chrome,
  },
  props: ['closeModal', 'submitColor'],
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
</style>
