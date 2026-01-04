import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  employeeId: string; // e.g. A-0037

  @Prop({ required: true })
  firstName: string; // e.g. Alex

  @Prop({ required: true })
  lastName: string; // e.g. Chen

  @Prop({ required: true, unique: true, lowercase: true })
  email: string; // e.g. alex.chen@aira.com.tw
}

export const UserSchema = SchemaFactory.createForClass(User);
