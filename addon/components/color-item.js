import Ember from 'ember';
import layout from '../templates/components/color-item';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['color-item'],
  classNameBindings: ['isDark:color-item--dark:color-item--light'],
  attributeBindings: ['style'],
  showControls: false,

  repository: inject.service(),
  navigation: inject.service(),

  isDark: computed('color.style', function() {
    return this.get('color.style') === 'dark';
  }),

  style: computed('color', function() {
    let color = this.get('color.code');

    return Ember.String.htmlSafe(`background: ${color}`);
  }),

  click() {
    this.toggleProperty('showControls');
  },

  actions: {
    delete() {
      this.get('repository').delete(this.get('color'));
    },

    view() {
      this.set('repository.currentColor', this.get('color'));
      this.set('navigation.currentScreen', this.get('navigation.detail'));
    }
  }
}).reopenClass({
  positionalParams: ['color']
});
