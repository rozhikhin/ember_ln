import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,

  actions: {
    updateQ(value) {
      Ember.run.debounce(this, this._setQ, value, 400);
    },

    clearSearch() {
      this.set('q', null);
    },

    deleteSpeaker(speaker) {
      if (confirm('Удалить спикера «' + speaker.get('name') + '»?')) {
        speaker.destroyRecord();
      }
    }
  },

  _setQ(value) {
    this.set('q', value.trim() || null);
  }
});
