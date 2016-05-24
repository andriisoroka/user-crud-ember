import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users',{path:'/'});
  this.route('edit-user');
  this.route('add-user');
});

export default Router;
