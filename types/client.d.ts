import type { Post, PostDeleteParams, PostParams, PostUpdateParams } from './post';
export declare class Client {
    private readonly apiUrl;
    private readonly apiKey;
    constructor(apiKey: string);
    createPost(params: PostParams): Promise<Post>;
    editPost(params: PostUpdateParams): Promise<Post>;
    deletePost(params: PostDeleteParams): Promise<void>;
}
export default Client;
//# sourceMappingURL=client.d.ts.map