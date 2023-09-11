import {TypeOf, z} from 'zod';
import { PostSchema } from './post.schema';

const User = z.object({
    id: z.number(),
    username: z.string(),
    password: z.string(),
    email: z.string(),
    posts: z.array(z.custom<PostSchema>()),
    created_at: z.date(),
    updated_at: z.date()
});

const UserInput = z.object({
    username: z.string(),
    password: z.string(),
    email: z.string(),
})

export type UserSchema = TypeOf<typeof User>;
export type UserInputSchema = TypeOf<typeof UserInput>;