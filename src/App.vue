<template>
  <div id="app">
    <Header
      v-bind='{ openModal, closeModal }'
    />
    <router-view />
    <transition name="modal">
      <div v-if='showModal' class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <ModalContent 
              v-bind='{ closeModal, submitColor, random }'
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header';
import ModalContent from './components/ModalContent';

export default {
  name: 'App',
  data() {
    return {
      showModal: false,
      random: false,
    };
  },
  components: {
    Header,
    ModalContent,
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal(random) {
      console.log(random)
      this.random = random;
      this.showModal = true;
    },
    submitColor(color) {
      this.$router.push({ name: 'PaletteContainer', params: { hexcode: color.substring(1, color.length) } });
      this.closeModal();
    },
  },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}

html, body {
  height: 100%;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 80%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .1s ease;
  font-family: Helvetica, Arial, sans-serif;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
