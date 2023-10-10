import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
});

const user = mongoose.model('user', UserSchema);

export default user;
