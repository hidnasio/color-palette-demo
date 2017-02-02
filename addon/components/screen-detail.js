import Ember from 'ember';
import layout from '../templates/components/screen-detail';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['color-detail'],
  classNameBindings: ['isDark:color-detail--dark:color-detail--light'],
  attributeBindings: ['style'],

  color: computed.alias('repository.currentColor'),
  isDark: computed('color.style', function() {
    return this.get('color.style') === 'dark';
  }),

  style: computed('color.code', function() {
    return Ember.String.htmlSafe(`background-color:${this.get('color.code')}`);
  }),


  repository: inject.service(),
  navigation: inject.service(),


  click() {
    this.set('navigation.currentScreen', this.get('navigation.palette'));
  }
});
