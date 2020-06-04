import * as React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { SiteBar } from '../components/SiteBar/SiteBar';
import { Header } from '../components/Header/Header';
import { MainBoard } from '../components/MainBoard/MainBoard';
import { WeekSwitcher } from '../components/WeekSwitcher/WeekSwitcher';
import { Wrapper } from './styled/StyledApp';


function App() {
  return (
    <div> {/*zamiast diva dodać styled component który będzie rederowany przez propsy theme={state.theme} czy dark mode czy light mode */}
      <Wrapper>
        <Header />
      </Wrapper>
      <WeekSwitcher />
      <NavBar />
      <SiteBar />
      <MainBoard />

    </div>
  );
}

export { App };
