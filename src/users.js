module.exports = {
	save : function (name, password, callback){
		console.log("Saving " + name + " with password " + password);
		callback();
	},
	get : function (name, callback) {
		console.log("Getting " + name );
		callback();
	},
	updatePassword : function (name, newPassword, callback){
		console.log("Updating password for " + name);
		callback();
	}
}