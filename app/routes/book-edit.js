import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('book', params.book_id);
      },
      setupController(controller, model) {
        this._super(controller, model);
        controller.set('speakers', this.store.findAll('speaker'));
      }
});
