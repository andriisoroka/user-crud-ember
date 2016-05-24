import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		transitionToRoute(){
			this.transitionToRoute('users');
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
