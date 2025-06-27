import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 email: String,
   password: String 
})

let UserModel = mongoose.models.users || mongoose.model('users', userSchema);
export default UserModel;