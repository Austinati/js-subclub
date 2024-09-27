import type {
  Post,
  PostDeleteParams,
  PostParams,
  PostUpdateParams,
} from './post';

export class Client {
  private readonly apiUrl = 'https://api.sub.club/public';
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // creates a new post on sub.club with the given parameters.
  async createPost(params: PostParams): Promise<Post> {
    const response = await fetch(`${this.apiUrl}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to create post: ${response.statusText}`);
    }

    return response.json() as Promise<Post>;
  }

  // edits the given post with the supplied PostUpdateParams.
  async editPost(params: PostUpdateParams): Promise<Post> {
    const response = await fetch(`${this.apiUrl}/post/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to edit post: ${response.statusText}`);
    }

    return response.json() as Promise<Post>;
  }

  // deletes a post with the given postID.
  async deletePost(params: PostDeleteParams): Promise<void> {
    const response = await fetch(`${this.apiUrl}/post/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete post: ${response.statusText}`);
    }

    return;
  }
}

export default Client;
