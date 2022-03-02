import { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DEVICES, GlobalStyle } from '../../styles';
import { useSelector } from 'react-redux';
import { themeSelector } from '../../redux/site.slice';
import theme from '../../styles/theme';

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
  .mainCol {
    width: 100vw;
    padding: 0 2%;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .leftCol {
    float: left;
    width: 20%;
    display: none;
  }
  .rightCol {
    width: 20%;
    display: none;
  }
  @media ${DEVICES.laptopL} {
    .leftCol {
      display: block;
    }
    .rightCol {
      display: block;
    }
    .mainCol {
      width: 60%;
    }
  }
`;
const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2% 30%;
  background-color: ${props => props.theme.colors.bgOverlay};
  margin: 0;
  border-bottom: #e5e5e5 1px solid;
  z-index: 10;
`;
const StyledLink = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
  a:link {
    color: ${props => props.theme.colors.typoPrimary};
  }
`;

export const Layout: FC = ({ children }) => {
  const themeName = useSelector(themeSelector);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme[themeName]}>
        <StyledContainer>
          <StyledHeader>
            <StyledLink>
              <a href={'https://overreacted.io/'}>Overreacted</a>
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
