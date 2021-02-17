import { useEffect, useState } from 'react';
import API from '../../utils/API';

export const useTournaments = (game_name) => {
	const [ tournaments, setTournaments ] = useState([]);
	useEffect(() => {
		const queryParams = {
			params: {
				'page[size]': 100,
				'page': 1
			}
		}

		async function getData(params) {
			try {
				const response = await API.get(`${game_name}/tournaments/`, params);
				setTournaments(response.data);
			}
			catch (error) {
				console.log(error)
			}
		}

		getData(queryParams);
	}, [game_name]);

	return { tournaments };
}