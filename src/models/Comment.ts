import AuthorModel from 'models/Author';

export default interface CommentModel {
    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    author: AuthorModel;
}