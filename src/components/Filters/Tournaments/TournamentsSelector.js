import React from 'react';
import styled from 'styled-components';
import { Tournament } from './Tournament';

const Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: #373E37;
	margin: auto 0;
	padding: 7px 10px;
	border: 2px solid rgb(93 94 90 / 60%);
`;

const Spoiler = styled.details`
	
`;

const Title = styled.summary`
	text-align: center;
	&:focus {
		outline: none
	}
`;

const Content = styled.div`
	padding: 15px 5px;
	font-size: 14px;
`;

const TournamentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Check = styled.input`
    height: 20px;
    width: 20px;
`;

const TournamentsSelector = ({ tournaments, filteredTournaments, setFilteredTournaments }) => {

	let ids = [...filteredTournaments];
	//console.log(ids);

	function handleCheck(tour) {
		let index = ids.indexOf(tour.id);
		//console.log(index);
		if (~index) { 
			ids.splice(index, 1) 
		} else ids.push(tour.id);

		
		setFilteredTournaments(ids);
	}

	return (
		<Container className='pure-u-1-2'>
			<Spoiler className='pure-u-1-1'>
				<Title>Tournaments</Title>
				<Content> 
					{
						tournaments && tournaments.map((tour) => (
							<TournamentContainer key={tour.id}>
								
								<Tournament tour={tour} setFilteredTournaments={setFilteredTournaments} className='pure-g' />
								<Check type="checkbox" value={tour.id} onChange={() => handleCheck(tour)} />
							</TournamentContainer>
						))
					}
				</Content>
			</Spoiler>
		</Container>
	);
}

export default TournamentsSelector;