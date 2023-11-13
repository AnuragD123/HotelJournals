import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fname : {type:String,require:true},
    lname : {type:String,require:true},
    email : {type:String , required:true},
    password : {type:String ,required:true},
    joinedOn : {type:Date, default:Date.now}  
});

export default mongoose.model('User',userSchema);