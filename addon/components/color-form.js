import Ember from 'ember';
import layout from '../templates/components/color-form';
import Color from '../models/color';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['color-form'],

  repository: inject.service(),
  navigation: inject.service(),

  init() {
    this._super(arguments);

    this.set('color', Color.create());
  },

  isValidName: computed('color.name', function() {
    return this.get('color.name').trim().length > 0;
  }),

  isInvalidName: computed.not('isValidName'),

  isValidColor: computed('color.code', function() {
    let color = this.get('color.code');
    let regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;

    return regex.test(color);
  }),

  isInvalidColor: computed.not('isValidColor'),

  isValid: computed('isValidColor', 'isValidName', function() {
    return this.get('isValidColor') && this.get('isValidName');
  }),

  actions: {
    add(color) {
      let style = this.get('isDark')? 'dark': 'light';
      color.set('style', style);
      this.get('repository').add(color);
      this.set('navigation.currentScreen', this.get('navigation.palette'));
    }
  }
});
