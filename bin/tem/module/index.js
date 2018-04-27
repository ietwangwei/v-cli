const fs = require('fs');
//state模板
const station_tmp = 
`const state = {}
export default state
`
//getter模板
const getter_tmp = 
`const getters = {}
export default getters
`
//mutation模板
const mutation_tmp = 
`const mutations = {}
export default mutations
`
//action模板
const action_tmp = 
`const mutations = {}
export default actions
`
//vue module的index模板
const module_index_tmp = 
`import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default {
	state,
	getters,
	mutations,
	actions
}`
const tems = [{
	file_name:'state.js',
	temp:station_tmp
},{
	file_name:'getters.js',
	temp:getter_tmp
},{
	file_name:'mutations.js',
	temp:mutation_tmp
},{
	file_name:'actions.js',
	temp:action_tmp
},{
	file_name:'index.js',
	temp:module_index_tmp
}];
function createTems(moudle_name,tems){
	tems.forEach(tem => {
		let path = moudle_name + '/' + tem.file_name;
		fs.writeFile(path,tem.temp);
	})
}
function createModule(moudle_name){
	fs.mkdirSync(moudle_name);
	createTems(moudle_name,tems)
}
module.exports = createModule;