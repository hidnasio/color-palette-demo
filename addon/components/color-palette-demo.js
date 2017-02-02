import Ember from 'ember';
import layout from '../templates/components/color-palette-demo';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  classNames: ['color-palette-demo'],
  layout,
  navigation: inject.service(),
  currentComponent: computed.alias('navigation.currentScreen'),

  actions: {
    navigateTo(component) {
      this.set('navigation.currentScreen', component);
    }
  }
});
