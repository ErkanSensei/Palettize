<template>
  <div id='header'>
      <button @click='openModal(true)' id='randomButton'>
        <Icon name='random' scale=1.5 />
      </button>
      <button @click='openModal(false)' id='filterButton'>
        <Icon name='filter' scale=1.5 />
      </button>
      <span id='helper'></span>
      <img src='../assets/Logo.png' id='logo' />
      <button @click='openModal(false)' id='favoritesButton'>
        <Icon name='heart-o' scale=1.5 />
      </button>
  </div>
</template>

<script>
import 'vue-awesome/icons/random';
import 'vue-awesome/icons/heart-o';
import 'vue-awesome/icons/filter';

import Icon from 'vue-awesome/components/Icon';

export default {
  components: {
    Icon,
  },
  props: ['openModal'],
};
</script>

<style scoped>
#header {
    height: 8vh;
    width: 100%;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.0975);
    position: fixed;
    top: 0;
}

#logo {
  height: 100%;
  vertical-align: middle;
}

#helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

#filterButton {
  position: absolute;
  left: 5vw;
  top: calc(50% - 12px);
  color: rgba(0,0,0,0.3);
}

#randomButton {
  position: absolute;
  left: 15vw;
  top: calc(50% - 12px);
  color: rgba(0,0,0,0.3);
}

#favoritesButton {
  position: absolute;
  right: 5vw;
  top: calc(50% - 12px);
  color: rgba(0,0,0,0.3);
}
</style>
