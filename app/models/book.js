import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    year: DS.attr('number'),
    genre: DS.attr('string'),
    pages: DS.attr('number'),
    isbn: DS.attr('string'),
    speaker: DS.belongsTo('speaker'),
    tags: DS.attr('string'),
});
