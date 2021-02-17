import { useState } from 'react';

export const useGameSelector = () => {
	const [ game, setGame ] = useState('csgo');
	return { game, setGame };
}