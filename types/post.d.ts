export type Post = {
    success: boolean;
    postId: string;
    post: string;
    uri: string;
    url: string;
};
export type PostParams = {
    content: string;
};
export type PostUpdateParams = {
    postId: string;
    content: string;
};
export type PostDeleteParams = {
    postId: string;
};
export type PostDeleteResult = {
    deleted: boolean;
};
//# sourceMappingURL=post.d.ts.map