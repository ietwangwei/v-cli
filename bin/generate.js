const fs = require('fs');
const ceateVueTmp = require('./tem/vuetmp');
const createModule = require('./tem/module');
const generate = {
	createFile(name){
		return ceateVueTmp(name);
	},
	createModule(name){
		return createModule(name)
	},
	run(name,type){
		if(type === 'module'){
			this.createModule(name)
		}
		if(type === 'file'){
			this.createFile(name)
		}
	}
};
module.exports = generate;
