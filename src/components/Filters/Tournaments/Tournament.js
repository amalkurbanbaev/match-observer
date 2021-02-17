import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
	
`;

const Spoiler = styled.details`
	padding: 10px 5px;
`;

const Tname = styled.summary`
	
`;

const Tprize = styled.p`
	padding: 10px 0 0 35px;
	font-size: 14px;
`;

const Tteams = styled.ul`
	padding: 10px 35px 0px;
	font-size: 14px;
`;

const Team = styled.li`
	padding: 5px 0 0 20px;
`;

const Ttime = styled.p`
	padding: 10px 35px;
	font-size: 14px;
`;

const Tid = styled.p`
	padding: 10px 35px;
	font-size: 14px;
`;



export const Tournament = ({ tour, setFilteredTournaments }) => {
	
	return (
		<Container>
			<Spoiler>
				<Tid> Tournament id: {tour.id} </Tid>
				<Tname> {tour.league.name} {tour.name} </Tname>
				<Tprize> Prizepool: {tour.prizepool === null ? 'TBD' : tour.prizepool} </Tprize>
				<Tteams> Teams:  {
					tour.teams.map((team) => <Team key={team.id}>{ team.name }</Team>)
				} </Tteams>
				<Ttime> Start: {moment(tour.begin_at).format('HH:mm')} {moment(tour.begin_at).format('DD.MM.YYYY')} </Ttime>
			</Spoiler>
		</Container>
	);
}