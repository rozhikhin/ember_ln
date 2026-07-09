import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true }
  },

  model(params) {
    if (params.q) {
      return this.store.query('speaker', { q: params.q.trim() });
    }

    return this.store.findAll('speaker');
  }
});
