import React from 'react';
import styled from 'styled-components';
import GameSelector from './GameSelector';
import TournamentsSelector from './Tournaments/TournamentsSelector';

const Container = styled.div`
	margin: 131px auto 0;
	width: 1170px;
	
`;

const Filters = ( {game, setGame, tournaments, filteredTournaments, setFilteredTournaments }) => {

	return (
		<Container className='pure-g'>
			<GameSelector game={game} setGame={setGame} />
      		<TournamentsSelector tournaments={tournaments} filteredTournaments={filteredTournaments} setFilteredTournaments={setFilteredTournaments} />
		</Container>
	);
}

export default Filters;