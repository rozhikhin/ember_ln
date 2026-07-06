import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    specialization: DS.attr('string'),
    bio: DS.attr('string'),
    country: DS.attr('string'),
    books: DS.hasMany('book')
});

