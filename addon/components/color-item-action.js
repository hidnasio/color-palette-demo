import Ember from 'ember';
import layout from '../templates/components/color-item-action';

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['color-item-action'],

  click(event) {
    event.stopPropagation();
    this.get('action')(this);
  }

}).reopenClass({
  positionalParams: ['icon', 'action']
});
