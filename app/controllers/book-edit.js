import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveBook() {
            var controller = this;
            this.get('model').save().then(function() {
                controller.transitionToRoute('books');
            }).catch(function(error) {
                console.log(error);
            });
        },
        cancel() {
            this.get('model').rollbackAttributes();
            this.transitionToRoute('books');
        },
        deleteBook(book) {
            if (confirm('Удалить книгу «' + book.get('title') + '»?')) {
                book.destroyRecord().catch(function(error) {
                    console.log(error);
                });
            }
        }
    }
});
