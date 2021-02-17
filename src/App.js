/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { Header } from './components/Header';
import { LiveMatches } from './components/LiveMatches/LiveMatches';
import { UpcomingMatches } from './components/UpcomingMatches/UpcomingMatches';
import { PastMatches } from './components/PastMatches/PastMatches';
import { Footer } from './components/Footer';
import { useMatches } from './components/Hooks/useMatches';
import { useGameSelector } from './components/Hooks/useGameSelector';
import Filters from './components/Filters/Filters';
import { useTournaments } from './components/Hooks/useTournaments';
import { useFilteredTournaments } from './components/Hooks/useFilteredTournaments';

const App = () => {

  const games = useGameSelector();
  const tournaments = useTournaments(games.game);
  const filteredTournaments = useFilteredTournaments(tournaments);
  const matches = useMatches(games.game, filteredTournaments.filteredTournaments);
  
  console.log(matches);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Filters {...games} {...tournaments} {...filteredTournaments} />
      <LiveMatches matches={matches.matches.running} />
      <UpcomingMatches matches={matches.matches.upcoming} />
      <PastMatches matches={matches.matches.past} />
      <Footer />
    </> 
  );
}

export default App;