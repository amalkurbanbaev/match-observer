import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
	display: flex;
	justify-content: center;
	background-color: #373E37;
	margin: auto 0;
`;

const Game = styled.button`
	text-align: center;
	color: #fff;
	border: 2px solid rgb(93 94 90 / 60%);
	padding: 7px 10px;
	cursor: pointer;
	background-color: ${props => props.active ? "rgba(135,176,24,0.6)" : "transparent"};
	&:focus {
		outline: none;
	}
`;

const GameSelector = ({ game, setGame }) => {
	return (
		<Container className='pure-u-1-2'>
			<Game onClick={() => setGame('csgo')} className='pure-u-1-3' active={game === 'csgo' ? true : false}>CS:GO</Game>
			<Game onClick={() => setGame('dota2')} className='pure-u-1-3' active={game === 'dota2' ? true : false}>DOTA 2</Game>
			<Game onClick={() => setGame('lol')} className='pure-u-1-3' active={game === 'lol' ? true : false}>LoL</Game>
		</Container>
	)
}

export default GameSelector;