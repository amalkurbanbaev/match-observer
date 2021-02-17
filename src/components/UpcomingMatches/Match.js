import React from 'react';
import styled from 'styled-components';
import tbd_logo from '../../images/tbd.svg';
import not_have_logo_csgo from '../../images/not_have_logo_csgo.svg';
import not_have_logo_dota2 from '../../images/not_have_logo_dota2.svg';
import not_have_logo_lol from '../../images/not_have_logo_lol.svg';
import moment from 'moment';
import { Streams } from '../Info/Streams/Streams';

const Container = styled.div`
	background-color: #333933;
	width: 100%;
	margin-bottom: 5px;
	padding: 15px 50px 20px;
	&:last-child {
		margin-bottom: 0;
	}
`;

const Tournament = styled.div`
	text-align: center;
	border-bottom: 2px solid rgba(135,176,24,0.6);
    padding-bottom: 15px;
`;

const MatchInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
`;

const Team = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TeamName = styled.span`

`;

const TeamLogo = styled.img`
	margin-right: 10px;
	max-width: 30px;
	max-height: 30px;
`;

const MatchDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MatchDetailsScheduled = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-right: 30px;
	border-right: 2px solid rgba(135, 176, 24, 0.6);
`;

const MatchDetailsTime = styled.span`
	text-align: right;
	width: 100%;
`;

const MatchDetailsDate = styled.span`
	margin-top: 10px;
`;

const MatchFormat = styled.div`
	margin-left: 30px;
`;

const TournamentName = styled.span`
	font-size: 14px;
`;

export const Match = ({ upcomingMatch }) => {

	const TBD = "TBD";
	

	return (
		<Container className="pure-g">
		
			<Tournament className="pure-u-1-1">
				<TournamentName> {upcomingMatch.league.name}  {upcomingMatch.serie.full_name} {upcomingMatch.tournament.id} </TournamentName>
				<Streams match={upcomingMatch} />
			</Tournament>

			<MatchInfo className="pure-u-1-1">
				<Team className="pure-u-1-3">
					<TeamLogo src={ 
						upcomingMatch.opponents.length === 0 ? 
							tbd_logo 
							: upcomingMatch.opponents[0].opponent.image_url !== null ? 
								upcomingMatch.opponents[0].opponent.image_url 
									: upcomingMatch.videogame.slug === 'cs-go' ?
										not_have_logo_csgo
										: upcomingMatch.videogame.slug === 'dota-2' ?
											not_have_logo_dota2
											: not_have_logo_lol
					} />
					<TeamName>{ upcomingMatch.opponents.length === 0 ? TBD : upcomingMatch.opponents[0].opponent.name }</TeamName>
				</Team>

				<MatchDetails className="pure-u-1-3">
					<MatchDetailsScheduled>
						<MatchDetailsTime>{moment(upcomingMatch.scheduled_at).format('HH:mm')}</MatchDetailsTime>
						<MatchDetailsDate>{moment(upcomingMatch.scheduled_at).format('DD.MM.YYYY')}</MatchDetailsDate>
					</MatchDetailsScheduled>

					<MatchFormat> Best Of {upcomingMatch.number_of_games} </MatchFormat>
				</MatchDetails>

				<Team className="pure-u-1-3">
					<TeamLogo src={ 
						upcomingMatch.opponents.length <= 1 ? 
							tbd_logo
							: upcomingMatch.opponents[1].opponent.image_url !== null ? 
								upcomingMatch.opponents[1].opponent.image_url 
									: upcomingMatch.videogame.slug === 'cs-go' ?
										not_have_logo_csgo
										: upcomingMatch.videogame.slug === 'dota-2' ?
											not_have_logo_dota2
											: not_have_logo_lol
					} />
					<TeamName>{ upcomingMatch.opponents.length <= 1 ? TBD : upcomingMatch.opponents[1].opponent.name  }</TeamName>
				</Team>

				
			</MatchInfo>
		</Container>
	);
}