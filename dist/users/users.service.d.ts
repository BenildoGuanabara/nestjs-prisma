import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from './../prisma-service/prisma-service.service';
import { User, Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Prisma.Prisma__UserClient<User, never>;
    findAll(): import(".prisma/client").PrismaPromise<User[]>;
    findOne(id: number): Prisma.Prisma__UserClient<User, never>;
    update(id: number, updateUserDto: UpdateUserDto): Prisma.Prisma__UserClient<User, never>;
    remove(id: number): Prisma.Prisma__UserClient<User, never>;
    search(): string;
}
