import React from 'react';
import styled from 'styled-components';
import not_have_logo_csgo from '../../images/not_have_logo_csgo.svg';
import not_have_logo_dota2 from '../../images/not_have_logo_dota2.svg';
import not_have_logo_lol from '../../images/not_have_logo_lol.svg';

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
	border-bottom: 2px solid rgb(93 94 90 / 60%);
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

const TeamName = styled.span``;

const TeamLogo = styled.img`
	margin-right: 10px;
	max-width: 30px;
	max-height: 30px;
`;

const MatchScore = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 20px;
	letter-spacing: 20px;
	font-weight: lighter;
`;

const Forfeit = styled.div`
	text-align: center;
	font-size: 16px;
	letter-spacing: 5px;
	font-weight: lighter;
	color: red;
	margin-top: 20px;
`;

const Canceled = styled.div`
	text-align: center;
	font-size: 16px;
	letter-spacing: 5px;
	font-weight: lighter;
`;

const TournamentName = styled.span`
	font-size: 14px;
`;

export const Match = ({ pastMatch }) => {
	return (
		pastMatch.opponents.length !== 0 && (
			<Container className="pure-g">
				<Tournament className="pure-u-1-1">
					<TournamentName>{`${pastMatch.league.name}  ${pastMatch.serie.full_name}`}</TournamentName>
				</Tournament>
				<MatchInfo className="pure-u-1-1">
					<Team className="pure-u-1-3">
						<TeamLogo
							src={
								pastMatch.opponents[0].opponent.image_url !== null
									? pastMatch.opponents[0].opponent.image_url
									: pastMatch.videogame.slug === 'cs-go'
									? not_have_logo_csgo
									: pastMatch.videogame.slug === 'dota-2'
									? not_have_logo_dota2
									: not_have_logo_lol
							}
						/>
						<TeamName>{pastMatch.opponents[0].opponent.name}</TeamName>
					</Team>

					{pastMatch.status === 'canceled' ? (
						<Canceled className="pure-u-1-3"> Canceled </Canceled>
					) : (
						<MatchScore className="pure-u-1-3">
							{pastMatch.results[0].score} : {pastMatch.results[1].score}
							{pastMatch.forfeit && <Forfeit className="pure-u-1-3"> Forfeited </Forfeit>}
						</MatchScore>
					)}

					<Team className="pure-u-1-3">
						<TeamLogo
							src={
								pastMatch.opponents[1].opponent.image_url !== null
									? pastMatch.opponents[1].opponent.image_url
									: pastMatch.videogame.slug === 'cs-go'
									? not_have_logo_csgo
									: pastMatch.videogame.slug === 'dota-2'
									? not_have_logo_dota2
									: not_have_logo_lol
							}
						/>
						<TeamName>{pastMatch.opponents[1].opponent.name}</TeamName>
					</Team>
				</MatchInfo>
			</Container>
		)
	);
};
