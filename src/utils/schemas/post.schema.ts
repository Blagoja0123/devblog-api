import {TypeOf, z} from "zod";

type ContentType = {
    type: string,
    content: string
};

const ZodContentType = z.custom<ContentType>();

const Post = z.object({
    id: z.string(),
    title: z.string(),
    content: z.array(ZodContentType),
    created_at: z.date(),
    updated_at: z.date(),
});

const PostInput = z.object({
    title: z.string(),
    content: z.array(ZodContentType)
});

export type PostSchema = TypeOf<typeof Post>;
export type PostInputSchema = TypeOf<typeof PostInput>;