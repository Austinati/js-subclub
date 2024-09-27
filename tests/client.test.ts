import Client from '../src/client';
import type {
  Post,
  PostDeleteParams,
  PostParams,
  PostUpdateParams,
} from '../src/post';

describe('Client', () => {
  const apiKey = process.env.API_KEY as string;
  const client = new Client(apiKey);
  const apiUrl = 'https://api.sub.club/public';

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create a post successfully', async () => {
    const mockPost: Post = {
      post: 'Test content',
      postId: '123',
      success: true,
      uri: 'https://api.sub.club/users/john/123',
      url: 'https://api.sub.club/@john/123',
    };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockPost),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const params: PostParams = { content: 'Test content' };
    const result = await client.createPost(params);

    expect(global.fetch).toHaveBeenCalledWith(`${apiUrl}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(params),
    });

    expect(result).toEqual(mockPost);
  });

  it('should throw an error when the post creation fails', async () => {
    const mockResponse = {
      success: false,
      statusText: 'Unauthorized',
      json: jest.fn(),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const params: PostParams = { content: 'Test content' };

    await expect(client.createPost(params)).rejects.toThrow(
      'Failed to create post: Unauthorized',
    );
  });

  it('should edit a post successfully', async () => {
    const mockPost: Post = {
      post: 'Test content',
      postId: '123',
      success: true,
      uri: 'https://api.sub.club/users/john/123',
      url: 'https://api.sub.club/@john/123',
    };

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockPost),
    };

    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const params: PostUpdateParams = { postId: '123', content: 'Test content' };
    const result = await client.editPost(params);

    expect(global.fetch).toHaveBeenCalledWith(`${apiUrl}/post/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(params),
    });

    expect(result).toEqual(mockPost);
  });

  it('should throw an error when the post edit fails', async () => {
    const mockResponse = {
      ok: false,
      statusText: 'Unauthorized',
      json: jest.fn(),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const params: PostUpdateParams = { postId: '123', content: 'Test content' };

    await expect(client.editPost(params)).rejects.toThrow(
      'Failed to edit post: Unauthorized',
    );
  });

  // TODO: add tests for the delete post method
  it('should delete a post successfully', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(undefined),
    };

    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const params: PostDeleteParams = { postId: '123' };
    const result = await client.deletePost(params);

    expect(global.fetch).toHaveBeenCalledWith(`${apiUrl}/post/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(params),
    });

    expect(result).toBeUndefined();
  });

  it('should throw an error when the post deletion fails', async () => {
    const mockResponse = {
      ok: false,
      statusText: 'Unauthorized',
      json: jest.fn(),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const params: PostDeleteParams = { postId: '123' };

    await expect(client.deletePost(params)).rejects.toThrow(
      'Failed to delete post: Unauthorized',
    );
  });
});
