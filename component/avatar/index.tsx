import { FC } from 'react';
import styled from 'styled-components';
import Typography from '../typography';

const StyledContainer = styled.aside`
  display: flex;
  flex-direction: row;
  margin-bottom: 3.5rem;
  .avatar {
    margin-right: 0.875rem;
    margin-bottom: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
  .textCol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .nameRow {
      display: flex;
      flex-direction: row;
      a {
        color: ${props => props.theme.colors.theme};
        margin-left: 0.3em;
        &:link {
          text-decoration: underline;
        }
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

const Avatar: FC = () => {
  return (
    <StyledContainer>
      <img className={'avatar'} src={'/avatar.jpg'} alt={'Dan Abramov'} />
      <div className={'textCol'}>
        <div className={'nameRow'}>
          <Typography color={'primary'} variant={'body1'}>
            Personal blog by{' '}
          </Typography>
          <a href={'https://mobile.twitter.com/dan_abramov'}>
            <Typography color={'theme'} variant={'body1'}>
              Dan Abramov
            </Typography>
          </a>
        </div>
        <Typography color={'primary'} variant={'body1'}>
          I explain with words and code.
        </Typography>
      </div>
    </StyledContainer>
  );
};

export default Avatar;
