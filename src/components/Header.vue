<template>
  <div id='header'>
      <button @click='openModal' id='refreshButton'>
        <Icon name='refresh' scale=1.5 />
      </button>
      <h1>This is a header</h1>
      <button @click='openModal' id='favoritesButton'>
        <Icon name='heart-o' scale=1.5 />
      </button>
  </div>
</template>

<script>
import 'vue-awesome/icons/refresh';
import 'vue-awesome/icons/heart-o';
import Icon from 'vue-awesome/components/Icon';

export default {
  components: {
    Icon,
  },
  props: ['openModal'],
  methods: {
    openMenu() {
      alert('clicked')
    },
  },
};
</script>

<style scoped>
#header {
    height: 8vh;
    width: 100%;
    background-color: red;
    position: fixed;
    top: 0;
}

#refreshButton {
  position: absolute;
  left: 5vw;
  top: calc(50% - 12px);
}

#favoritesButton {
  position: absolute;
  right: 5vw;
  top: calc(50% - 12px);
}
</style>
