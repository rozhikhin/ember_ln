import Ember from 'ember';

export function splitTags(params) {
  const raw = params[0];
  if (!raw) {
    return [];
  }
  return raw.split(',').map(function(tag) {
    return tag.trim();
  }).filter(Boolean);
}

export default Ember.Helper.helper(splitTags);
