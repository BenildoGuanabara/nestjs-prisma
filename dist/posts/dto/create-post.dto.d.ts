import { Prisma } from '@prisma/client';
export declare class CreatePostDto implements Prisma.PostCreateInput {
    title: string;
    content: string;
    published: boolean;
    authorId: number;
    posts: Prisma.PostCreateNestedManyWithoutAuthorInput;
}
