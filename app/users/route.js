import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('user')
	},
	actions:{
		delete(entity){
			if(confirm('Delete ' + entity.get('name'))){
				entity.destroyRecord().then().catch((err) => {
					alert(err.message);
				});
			}
		}
	}
});
