import Ember from 'ember';
import colors from '../utils/colors';

export default Ember.Service.extend({
  colors: null,

  init() {
    this._super(...arguments);
    this.set('colors', colors);
  },

  all() {
    return this.get('colors');
  },

  add(color) {
    this.get('colors').unshiftObject(color);
  },

  delete(color) {
    this.get('colors').removeObject(color);
  },

  findByName(name) {
    return this.get('colors').find((color) => name.toUpperCase() === color.name.toUpperCase());
  }
});
