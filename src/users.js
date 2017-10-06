module.exports = {
	save : function (name, password, callback){
		console.log("Saving " + name + " with password " + password);
		callback();
	},
	get : function (name, callback) {
		console.log("Getting " + name );
		callback();
	}
}