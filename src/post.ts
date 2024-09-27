// Post represents a post in the system.
export type Post = {
  success: boolean;
  postId: string;
  post: string;
  uri: string;
  url: string;
};

// PostParams holds the parameters for creating a new sub.club post.
export type PostParams = {
  content: string;
};

// PostUpdateParams has parameters for editing a sub.club post.
export type PostUpdateParams = {
  postId: string;
  content: string;
};

// PostDeleteParams has parameters for deleting a sub.club post.
export type PostDeleteParams = {
  postId: string;
};

// PostDeleteResult represents an API response after deleting a sub.club post.
export type PostDeleteResult = {
  deleted: boolean;
};
