import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveSpeaker() {
            var controller = this;
            this.get('model').save().then(function(){
                controller.transitionToRoute('speakers');
            }).catch(function(error){
                console.log(error);
            });
        },
        cancel() {
            this.transitionToRoute('speakers');
        }
    }
});
