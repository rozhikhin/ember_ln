import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteSpeaker(speaker) {
            if (confirm('Удалить спикера «' + speaker.get('name') + '»?')) {
                speaker.destroyRecord();
              }
            }
        }
});
