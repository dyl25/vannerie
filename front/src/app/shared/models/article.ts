import { User } from "./user";

export class Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    author: User;
    created_at: Date;
    updated_at: Date;
}
