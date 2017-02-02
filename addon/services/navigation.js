import Ember from 'ember';

const { computed } = Ember;

export default Ember.Service.extend({
  new: 'screen-new',
  detail: 'screen-detail',
  palette: 'screen-palette',

  currentScreen: computed(function() {
    return this.get('palette');
  })
});
