import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(data: {
    employeeId: string;
    firstName: string;
    lastName: string;
  }) {
    const email = `${data.firstName}.${data.lastName}@aira.com.tw`.toLowerCase();

    return this.userModel.create({
      employeeId: data.employeeId,
      firstName: data.firstName,
      lastName: data.lastName,
      email,
    });
  }

  async findAll() {
    return this.userModel.find();
  }
}