import mongoose from 'mongoose';
import User from '../.././interfaces/user.interface';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;
