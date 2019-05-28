import AuthorModel from 'models/Author';
import CommentModel from 'models/Comment';

export default interface ArticleModel {
    id: number;
    title: string;
    slug: string;
    subtitle: string;
    annotation: string;
    content: string;
    categoriesIds: Array<number>;
    url: string;
    createdAt: string;
    updatedAt: string;
    author: AuthorModel;
    views: number;
    likes: number;
    dislikes: number;
    comments: Array<CommentModel>;
}
