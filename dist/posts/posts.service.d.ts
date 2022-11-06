import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from './../prisma-service/prisma-service.service';
import { Post, Prisma } from '@prisma/client';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): Prisma.Prisma__PostClient<Post, never>;
    findAll(): import(".prisma/client").PrismaPromise<Post[]>;
    findOne(id: number): Prisma.Prisma__PostClient<Post, never>;
    update(id: number, updatePostDto: UpdatePostDto): import(".prisma/client").PrismaPromise<Prisma.BatchPayload>;
    remove(id: number): Prisma.Prisma__PostClient<Post, never>;
}
