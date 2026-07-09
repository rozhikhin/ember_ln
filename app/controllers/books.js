import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'tags'],
  q: null,
  tags: null,

  actions: {
    updateQ(value) {
      Ember.run.debounce(this, this._setQ, value, 400);
    },

    updateTags(value) {
      Ember.run.debounce(this, this._setTags, value, 400);
    },

    clearSearch() {
      this.set('q', null);
      this.set('tags', null);
    },

    deleteBook(book) {
      if (confirm('Удалить книгу «' + book.get('title') + '»?')) {
        book.destroyRecord().catch(function(error) {
          console.log(error);
        });
      }
    }
  },

  _setQ(value) {
    this.set('q', value.trim() || null);
  },

  _setTags(value) {
    this.set('tags', value.trim() || null);
  }
});
