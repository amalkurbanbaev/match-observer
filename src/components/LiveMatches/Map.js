import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100%;
	align-items: center;
`;

const MapStatusLiveContainer = styled.div`

`;

const MapStatusLive = styled.span`
    background: #FF0000;
    border-radius: 60px;
    text-align: center;
    font-size: 14px;
    padding: 4px 10px;
`;

const MapNumber = styled.span`
	text-align: center;
`;

const MapWinner = styled.span`
	text-align: center;
`;

const TeamName = styled.span`

`;

class Map2 extends React.Component {
	render() {
		return (
			<MapContainer>
				<MapNumber>Map {this.props.game.position}</MapNumber>
				{
					this.props.game.status === 'running' ? 
						<MapStatusLiveContainer>
							<MapStatusLive> { this.props.game.status } </MapStatusLive>

							{/* <NotificationsCenterContainer className="HELLO">
								<NotificationsCenter game={this.props.game} liveMatch={this.props.liveMatch} />
							</NotificationsCenterContainer> */}

						</MapStatusLiveContainer>
					:
							this.props.game.status === 'not_started' ? 
								this.props.game.status
							:
								<MapWinner>
									{
										this.props.liveMatch.opponents.map((opponent) => (
											opponent.opponent.id === this.props.game.winner.id &&
											<TeamName key={opponent.opponent.id}>{opponent.opponent.name} win</TeamName>
										))
									}
								</MapWinner>
				}
			</MapContainer>
		);
	}
}

export default React.memo(Map2);