import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from './../prisma-service/prisma-service.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {

  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
          data:createPostDto,
      });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where:{id},
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.updateMany({
       where:{id},
      data:updatePostDto
     
    })
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where:{id}
    })
  }
}
