import { Prisma } from '@prisma/client';
import { IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto implements  Prisma.UserCreateInput{
     @IsNotEmpty({ message: 'Email não pode ser vazio' })
     email:string;
     @IsNotEmpty({ message: 'Nome não pode ser vazio' })
     name:string;
     posts:Prisma.PostCreateNestedManyWithoutAuthorInput;
}
