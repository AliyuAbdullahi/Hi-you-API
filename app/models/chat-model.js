var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserData = new Schema({
    user_name: {type: String, required:true},
    password:{type: String, required:true},
    email:{type:String}
});
mongoose.model('UserData', UserDataSchema);
