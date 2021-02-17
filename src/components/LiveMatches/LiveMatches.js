import React from 'react';
import styled from 'styled-components';
import Match from './Match';

const Main = styled.div`
	margin-top: 20px;
`;

const Section = styled.div`
	width: 1170px;
	margin: 0 auto;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
`;

const Requests = styled.span`
	text-align: right;
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

export const LiveMatches = ({ matches }) => {

	/* let newName = null;

	matches.data && matches.data.map((match) => (
		{ name: newName } = match
	));

	const matchesSet = new Set(matches.data && matches.data);
	const statuses = new Set();

	for (let match of matchesSet) {
		for (let game of match.games) {
			statuses.add(game.status);
		}
	}

	let arr = ["nap", "teachers", "nap", "nap", "nap"];


	let myMap = new Map();
	for (let word of arr) {
		myMap.set(word, '123')
	}

	console.log(myMap) */
	/* function aclear(arr) {
		let newMap = new Map();
		
		for (let word of arr) {
			let sorted = word.toLowerCase().split("").sort().join("");
			console.log(sorted)
			newMap.set(sorted, word);
			
		}

		return Array.from(newMap.values())
	}

	aclear(arr) */

	/* const allGames = matches.data && matches.data.reduce((prev, current) => (
		[...prev, ...current.games]
	), [])

	console.log(allGames); */
	  

	const used = matches.headers && parseInt(matches["headers"]["x-rate-limit-used"]);
	const remaining = matches.headers && parseInt(matches.headers["x-rate-limit-remaining"]);

	const summX = used + remaining;
	return (
		<Main className="pure-g">
			<Section className="pure-u-1-1">
				Live Matches { new Date().toLocaleTimeString() }

				<Requests>
					{
						used === undefined ? 
							`Number of requests exceeded. Waiting for next hour`
							: `Requests used: ${used} / ${summX}`

					}
					
				</Requests>
			</Section>
			<Container className="pure-g">
			{
				matches.data &&
					matches.data.length > 0 ? 
						matches.data.map((liveMatch) => (
								<Match liveMatch={liveMatch} key={liveMatch.id} className="pure-g"  />
						))
					:
					<EmptyList className="pure-u-1-1"> There are no matches yet </EmptyList> 
			}
			</Container>
		</Main>
	);
}