import { Prisma } from '@prisma/client';
export declare class CreateUserDto implements Prisma.UserCreateInput {
    email: string;
    name: string;
    posts: Prisma.PostCreateNestedManyWithoutAuthorInput;
}
