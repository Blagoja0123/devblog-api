import {TypeOf, z} from "zod";

type ContentType = {
    type: string,
    content: string
};

const ZodContentType = z.custom<ContentType>();

const Post = z.object({
    id: z.number(),
    title: z.string(),
    content: z.array(ZodContentType),
    created_at: z.date(),
    updated_at: z.date(),
});

const PostInput = z.object({
    title: z.string(),
    content: z.array(ZodContentType),
    author: z.number(),
});

export type PostSchema = TypeOf<typeof Post>;
export type PostInputSchema = TypeOf<typeof PostInput>;