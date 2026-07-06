import DS from 'ember-data';


export default DS.JSONSerializer.extend({
    normalizeDeleteRecordResponse() {
        return { 
            data: null 
        };
    }
});
