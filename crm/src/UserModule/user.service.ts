import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UpdateResult, DeleteResult, Repository } from  'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  getUsers(): string {
    return 'get Users';
  }
  getName(name: string): string {
    return `Hello ${name}`;
  }


  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async read(id):Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
