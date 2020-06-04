import * as React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { SiteBar } from '../components/SiteBar/SiteBar';
import { Header } from '../components/Header/Header';
import { MainBoard } from '../components/MainBoard/MainBoard';
import { Wrapper } from './styled/StyledApp';
import { BackgroundWrapper } from '../styled/StyledBackgroundWrapper';


function App() {
  return (
    <div> {/*zamiast diva dodać styled component który będzie rederowany przez propsy theme={state.theme} czy dark mode czy light mode */}
      <BackgroundWrapper>
        <Wrapper>
          <Header />
        </Wrapper>
        <NavBar />
        <SiteBar />
        <MainBoard />
      </BackgroundWrapper>
    </div>
  );
}

export { App };
