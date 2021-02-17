import React from 'react';
import styled from 'styled-components';
import { Match } from './Match'

const Main = styled.div`
	margin-top: 60px;
`;

const Section = styled.div`
	width: 1170px;
	margin: 0 auto;
	margin-bottom: 20px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 1170px;
	background-color: #373E37;
	margin: 0 auto;
`;

const EmptyList = styled.div`
	text-align: center;
	padding: 20px 0;
`;

export const UpcomingMatches =  ({ matches }) => {
	
	return (
		<Main className="pure-g">
			<Section className="pure-u-1-1"> Upcoming Matches { new Date().toLocaleTimeString() } </Section>
			<Container className="pure-g">
			{
				matches.data &&
					matches.data.length > 0 ?
						matches.data.map((upcomingMatch) => (
							<Match upcomingMatch={upcomingMatch} key={upcomingMatch.id} />	
						))						
						:
						<EmptyList className="pure-u-1-1"> There are no matches yet </EmptyList>
			}
			</Container>
		</Main>
	);
}