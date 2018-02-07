import Vue from 'vue';
import Router from 'vue-router';
import PaletteContainer from '@/components/PaletteContainer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:hexcode',
      name: 'PaletteContainer',
      component: PaletteContainer,
    },
  ],
});
