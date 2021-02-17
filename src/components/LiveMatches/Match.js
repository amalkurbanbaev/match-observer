import React from 'react';
import styled from 'styled-components';
import not_have_logo_csgo from '../../images/not_have_logo_csgo.svg';
import not_have_logo_dota2 from '../../images/not_have_logo_dota2.svg';
import not_have_logo_lol from '../../images/not_have_logo_lol.svg';
import Map from './Map';
import { Streams } from '../Info/Streams/Streams';

const Container = styled.div`
	background-color: #333933;
	width: 100%;
	margin-bottom: 5px;
	padding: 15px 50px 15px 50px;
	&:last-child {
		margin-bottom: 0;
	}
`;

const Teams = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Team = styled.div`
	display: flex;
	align-items: center;
	padding-left: 30px;
	margin-bottom: 10px;
	&:last-child {
		margin-bottom: 0
  	}
`;

const TeamName = styled.span`

`;

const TeamLogo = styled.img`
	margin-right: 10px;
	max-width: 30px;
	max-height: 30px;
`;

const Maps = styled.ul`
	display: flex;
`;

const Tournament = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid rgba(135,176,24,0.6);
    padding-bottom: 15px;
	margin-bottom: 20px;
`;

const TournamentName = styled.span`
	font-size: 14px;
`;

const Match = ({ liveMatch }) => {

	return (
		<Container className="pure-g">
			<Tournament className="pure-u-1-1">
				<TournamentName> {`${liveMatch.league.name}  ${liveMatch.serie.full_name}`} </TournamentName>
				<Streams match={liveMatch} />
			</Tournament>
			
			<Teams className="pure-u-1-2">
				{
					liveMatch.opponents.map((opponent) => (
						<Team key={opponent.opponent.id}> 
							<TeamLogo 
								src={
									opponent.opponent.image_url !== null ? 
										opponent.opponent.image_url 
										: liveMatch.videogame.slug === 'cs-go' ?
											not_have_logo_csgo
											: liveMatch.videogame.slug === 'dota-2' ?
												not_have_logo_dota2
												: not_have_logo_lol 
								}
								alt={opponent.opponent.name} />
							<TeamName>{opponent.opponent.name}</TeamName>
						</Team>
					))
				}
			</Teams>
			<Maps className="pure-u-1-2">
				{
					liveMatch.games.map((game) => (
						<Map key={game.id} game={game} liveMatch={liveMatch} />
					))
				}
			</Maps>
		</Container>
	);
}

export default React.memo(Match);