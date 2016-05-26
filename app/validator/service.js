import Ember from 'ember';

export default Ember.Service.extend({
	
	dispatch(rules,entity){

		if(!this.isStore(entity) && !this.isObject(entity)) {
			return this.error('Model not valid!')
		}

		return this.isStore(entity) ? this.dispatchStore(rules,entity) : this.dispatchObject(rules,entity);

	},
	
	dispatchStore(rules,entity){
		let errors= [];

		for(let item in rules){
			let res = this.check(rules[item],entity.get(item));
			if(res){
				errors.push(this.error(`"${item}" field ${res}`))
			}
		}
		return errors.join('. ')
	},

	dispatchObject(rules,entity){
		let errors= [];

		for(let item in rules){
			let res = this.check(rules[item],entity[item]);
			if(res){
				errors.push(this.error(`"${item}" field ${res}`))
			}
		}
		return errors.join('. ') 	
	},

	error(txt){
		return ['Error:',txt].join(' ');
	},

	warning(text){
		return ['Warning:',txt].join(' ');
	},

	isObject(obj){
		return typeof obj === 'object';
	},

	check(rule,data){
		for(let item in rule){
			if(item == 'required' && rule[item]){
				if(!data || data == ''){
					return 'is required';
				}
			}else if(item == 'type'){
				var flag = null;
				switch(rule[item]){
					case "string":
						if(!this.isString(data)){
							flag = "must be a string";
						}
						break;
					case "number":
						if(!this.isNumber(parseInt(data))){
							flag = "must be a number";
						}
						break;
					case "email":
						if(!this.isEmail(data)){
							flag = "must be a email";
						}
						break;
					default:
						break;
				}
				return flag;
			}
		}
		return null;
	},

	isStore(obj){
		return obj.hasOwnProperty('store');
	},

	isExist(x){
		return x != null;
	},

	isString(x){
		return typeof x === "string";
	},

	isEmail(x){
		let re = /\S+@\S+\.\S+/;
    	return re.test(x);
	},

	isNumber(x){
		return typeof x === "number";
	}
});
