import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('user',params.id);
	},
	actions:{
		update(entity){
			return entity.save();
		},
		transitionToRoute(){
			this.transitionTo('users');
		}
	}
});
