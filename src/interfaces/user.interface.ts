import { Document } from 'mongoose';

export default interface User extends Document {
  name: string;
  username: string;
  email: string;
  profileImage: string;
}
