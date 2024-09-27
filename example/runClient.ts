import Client from '../src/client';
import type { PostParams } from '../src/post';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function main() {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error('API_KEY is not defined in the environment variables.');
    process.exit(1);
  }

  const client = new Client(apiKey);

  const postParams: PostParams = {
    content: 'This post was created from the command line.',
  };

  try {
    const post = await client.createPost(postParams);
    console.log('Post created successfully:', post);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

main();
