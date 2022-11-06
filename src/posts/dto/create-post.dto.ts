import { Prisma } from '@prisma/client';
import { IsNotEmpty, Length } from 'class-validator';
export class CreatePostDto implements  Prisma.PostCreateInput{
     @IsNotEmpty({ message: 'Title não pode ser vazio' })
     title:string;
     @IsNotEmpty({ message: 'content não pode ser vazio' })
     content:string;
     @IsNotEmpty({ message: 'published não pode ser vazio' })
     published:boolean;
     @IsNotEmpty({ message: 'author ID não pode ser vazio' })
     authorId:number;
     posts:Prisma.PostCreateNestedManyWithoutAuthorInput;
}
