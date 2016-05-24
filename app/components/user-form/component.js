import Ember from 'ember';

export default Ember.Component.extend({
	entity:{

	},
	actions:{
		send(){
			this.attrs.save(this.get('entity')).then((res) => {
				if(res['status']){
					this.sendAction('transition');
				}
			});
		}
	}
});
