import { httpClient } from '../config';
import { Post } from '../types';
import { SERVER_UNKNOWN_ERROR } from '../constants';

export const POST_URL = '/posts';

export class PostService {
  static async posts(): Promise<Post[]> {
    const result = await httpClient.get(POST_URL);
    const serverResponse = result.data;
    if (!serverResponse) {
      throw new Error(SERVER_UNKNOWN_ERROR);
    }
    return serverResponse;
  }
  static async post(postId: number): Promise<Post> {
    const result = await httpClient.get(`${POST_URL}/${postId}`);
    const serverResponse = result.data;
    if (!serverResponse) {
      throw new Error(SERVER_UNKNOWN_ERROR);
    }
    return serverResponse;
  }
}
