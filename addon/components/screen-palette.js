import Ember from 'ember';
import layout from '../templates/components/screen-palette';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout,

  repository: inject.service(),

  colors: computed(function() {
    return this.get('repository').all();
  })
});
