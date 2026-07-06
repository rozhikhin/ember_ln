import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      deleteBook(book) {
        if (confirm('Удалить книгу «' + book.get('title') + '»?')) {
          book.destroyRecord().catch(function(error) {
            console.log(error);
          });
        }
      }
    }
  });
