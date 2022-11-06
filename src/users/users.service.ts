import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from './../prisma-service/prisma-service.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
     return this.prisma.user.create({
        data:createUserDto,
     });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where:{id},
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
     var postExist=this.prisma.post.findFirst({
          where:{
            id:id,
          }
        });
        if(!postExist){
            throw new Error("Not exist");
        };
      return this.prisma.user.update({
          where:{id},
          data:updateUserDto
      });
    }
  remove(id: number) {
      return this.prisma.user.delete({
              where:{id:id}
       });}

  search(){
    return "ophaaa";
  }
  
}
