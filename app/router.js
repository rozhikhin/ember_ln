import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');

  this.route('speakers');
  this.route('speaker-new', { path: '/speakers/new' });
  this.route('speaker-edit', { path: '/speakers/:speaker_id/edit' });

  this.route('books');
  this.route('book-new', { path: '/books/new' });
  this.route('book-edit', { path: '/books/:book_id/edit' });
});

export default Router;
