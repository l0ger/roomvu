import type { NextPage, GetServerSideProps } from 'next';
import Layout from '../../component/layout';
import { QueryClient, dehydrate } from 'react-query';
import { PostService } from '../../services/postService';
import { Post as PostType } from '../../types';
import { usePosts } from '../../hooks/postHook';
import { Fragment } from 'react';
import Post from '../../component/post';
import Avatar from '../../component/avatar';

const PostPage: NextPage = () => {
  const { data: posts, error, isLoading } = usePosts();
  return (
    <Layout>
      <Avatar />
      {!error &&
        !isLoading &&
        posts &&
        posts.map(post => (
          <Fragment key={post.id}>
            <Post post={post} />
          </Fragment>
        ))}
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async function () {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PostType[]>(['posts'], () => {
    return PostService.posts();
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default PostPage;
