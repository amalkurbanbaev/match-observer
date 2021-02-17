import { useState } from 'react';

export const useFilteredTournaments = () => {
	const [ filteredTournaments, setFilteredTournaments ] = useState([]);
	
	return { filteredTournaments, setFilteredTournaments };
}