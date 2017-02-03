import Ember from 'ember';
import layout from '../templates/components/screen-palette';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout,

  repository: inject.service(),

  colors: computed('repository.colors.[]', function() {
    return this.get('repository').all();
  })
});
