import * as React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { SiteBar } from '../components/SiteBar/SiteBar';
import { Header } from '../components/Header/Header';
import { MainBoard } from '../components/MainBoard/MainBoard';
import { Wrapper } from './styled/StyledApp';
import { BackgroundWrapper } from '../styled/StyledBackgroundWrapper';
// import { StyledThemeContainer } from '../theme/styled/StyledThemeContainer';
// import { themeDark } from '../theme/themeDark/themeDark';
// import { themeLight } from '../theme/themeLight/themeLight';


function App() {
  return (
    <div>
    {/* <StyledThemeContainer> zamiast diva dodać styled component który będzie rederowany przez propsy theme={state.theme} czy dark mode czy light mode */}
      <BackgroundWrapper>
        <Wrapper>
          <Header />
        </Wrapper>
        <NavBar />
        <MainBoard />
        <SiteBar />
      </BackgroundWrapper>
    {/* </StyledThemeContainer> */}
    </div>
  );
}

export { App };
