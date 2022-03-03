import { FC } from 'react';
import styled from 'styled-components';
import Typography from '../typography';
import { getTodayShortStr } from '../../utils';
import { Post as PostType } from '../../types';

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;

  p {
    padding: 0.3em 0;
  }
`;

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const getDisplayTitle = (title: string) =>
    title.length > 45 ? title.substring(0, 45) + '....' : title;
  return (
    <StyledContainer>
      <Typography color={'theme'} variant={'h4'}>
        {getDisplayTitle(post.title)}
      </Typography>
      <header>
        <Typography
          color={'secondary'}
          variant={'body2'}
        >{`${getTodayShortStr()}  • ☕️ 5 min read`}</Typography>
      </header>
      <Typography variant={'body1'}>{post.body}</Typography>
    </StyledContainer>
  );
};

export default Post;
