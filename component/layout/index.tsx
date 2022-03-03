import { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DEVICES, GlobalStyle } from '../../styles';
import { useSelector } from 'react-redux';
import { themeSelector } from '../../redux/site.slice';
import theme from '../../styles/theme';
import Typography from '../typography';

const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.bgPrimary};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
const StyledMain = styled.main`
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.bgOverlay};
  margin: 0;
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 3%;

  .mainCol {
    width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .leftCol {
    float: left;
    width: 25%;
    display: none;
  }
  .rightCol {
    width: 25%;
    display: none;
  }
  @media ${DEVICES.laptopL} {
    padding: 0;
    .leftCol {
      display: block;
    }
    .rightCol {
      display: block;
    }
    .mainCol {
      width: 50%;
    }
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5% 3%;
  background-color: ${props => props.theme.colors.bgOverlay};
  margin: 0;
  z-index: 10;
  @media ${DEVICES.laptopL} {
    padding: 2% 25%;
  }
`;
const StyledLink = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
`;

const Layout: FC = ({ children }) => {
  const themeName = useSelector(themeSelector);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme[themeName]}>
        <StyledContainer>
          <StyledHeader>
            <StyledLink>
              <a href={'https://overreacted.io/'}>
                <Typography color={'primary'} variant={'h4'}>
                  Overreacted
                </Typography>
              </a>
            </StyledLink>
          </StyledHeader>
          <StyledMain>
            <div className={'leftCol'} />
            <div className={'mainCol'}>{children}</div>
            <div className={'rightCol'} />
          </StyledMain>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
