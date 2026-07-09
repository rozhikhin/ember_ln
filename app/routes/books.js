import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    tags: { refreshModel: true }
  },

  model(params) {
    const query = {};

    if (params.q) {
      query.q = params.q.trim();
    }

    if (params.tags) {
      query.tags_like = params.tags.trim();
    }

    if (Ember.isEmpty(query)) {
      return this.store.findAll('book');
    }

    return this.store.query('book', query);
  }
});
