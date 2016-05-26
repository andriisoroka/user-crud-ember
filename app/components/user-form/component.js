import Ember from 'ember';

export default Ember.Component.extend({
	init(){
		this._super(...arguments);
		if(this.record){
			this.entity = this.record;
		}else{
			this.set("entity",{});
		}
	},
	validator:Ember.inject.service(),
	entity:{

	},
	error:null,
	validateEntity(entity){
		let validateRules = {
			name:{
				required:true,
				type:"string"
			},
			email:{
				required:true,
				type:"email"
			},
			position:{
				required:true,
				type	:"string"
			},
			age:{
				required:true,
				type:"number"
			}
		};
		return this.get('validator').dispatch(validateRules,entity);
	},
	actions:{
		send(){
			let validateResult = this.validateEntity(this.get('entity'));
			if( validateResult != "" ){
				this.set('error',validateResult);
			}else{
				this.attrs.save(this.get('entity')).then((res) => {
					if(!res.isError){
						this.set("entity",{});
						this.sendAction('transition');
					}
				}).catch((err) => {
					this.set('error','Some wrong!')
				});
			}
		}
	}
});
