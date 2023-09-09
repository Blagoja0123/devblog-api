import {TypeOf, z} from "zod";

type ContentType = "paragraph" | "image" | "code";

const ZodContentType = z.custom<{arg: ContentType}>();

const Post = z.object({
    uuid: z.string(),
    title: z.string(),
    content: z.array(ZodContentType),
    dateCreated: z.date(),
    dateUpdated: z.date(),
});

export type PostSchema = TypeOf<typeof Post>;