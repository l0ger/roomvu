import { useQuery } from 'react-query';
import { Post } from '../types';
import { PostService } from '../services/postService';

export const usePosts = () => {
  return useQuery<Post[]>(
    ['posts'],
    () => {
      return PostService.posts();
    },
    {
      staleTime: 1000 * 60 * 5, //5 minutes
    },
  );
};

export const usePost = (postId: number) => {
  return useQuery<Post>(
    ['post', postId],
    () => {
      return PostService.post(postId);
    },
    {
      staleTime: 1000 * 60 * 120, //120 minutes
    },
  );
};
