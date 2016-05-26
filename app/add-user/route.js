import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		transitionToRoute(){
			this.store.unloadAll('user');
			this.transitionTo('users');
		},
		save(data){
			let user = this.store.createRecord('user',{
				email:data.email,
				position:data.position,
				age:data.age,
				name:data.name
			});
			return user.save();
		}
	}
});
