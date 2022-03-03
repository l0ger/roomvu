import type { NextPage, GetServerSideProps } from 'next';
import Layout from '../../component/layout';
import { QueryClient, dehydrate } from 'react-query';
import { PostService } from '../../services/postService';
import { Post as PostType } from '../../types';
import { usePost } from '../../hooks/postHook';
import Post from '../../component/post';
import { useRouter } from 'next/router';

const PostDetailsPage: NextPage = () => {
  const router = useRouter();
  const {
    data: post,
    error,
    isLoading,
  } = usePost(router.query?.postId as string);
  return (
    <Layout>{!error && !isLoading && post && <Post post={post} />}</Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async function (context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PostType>(
    ['post', context.query?.postId || ''],
    () => {
      return PostService.post(context.query?.postId as string);
    },
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default PostDetailsPage;
