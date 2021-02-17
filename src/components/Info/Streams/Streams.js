import React from 'react';
import styled from 'styled-components';

const StreamsContainer = styled.div`
	display: inline-block;
	margin-left: 10px;
`;

const Spoiler = styled.details`

`;

const Summary = styled.summary`
	color: rgba(135,176,24,0.6);
`;

const StreamsList = styled.ul`

`;

const Stream = styled.li`
	color: #7391cc;
	text-decoration: underline;
	padding-left: 8px;
`;


export const Streams = ({ match }) => {
	
	const streams = Object.entries(match.streams);
	
	return (
		<StreamsContainer>
					<Spoiler>
						<Summary>Streams</Summary>
						<StreamsList>
							{ 
								Object.entries(match.streams) && streams.map((stream, i) => (
									<Stream key={i}>
										{
											stream[1].raw_url !== null && 
											<a href={stream[1].raw_url} target="_blank" rel="noreferrer"> { stream[0]} </a>
										}
									</Stream>
								)) 
							}
						</StreamsList>
					</Spoiler>
				</StreamsContainer>
	);
}
