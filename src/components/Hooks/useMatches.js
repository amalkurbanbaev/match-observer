/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from 'react';
import API from '../../utils/API';

export const useMatches = (game_name, filteredTournaments) => {

	function init(state) {
		return {...state};
	}
	
	function reducer(state, action) {
		switch (action.type) {
			case 'running':
				return {
					...state,
					running: action.payload
				}
			case 'upcoming':
				return {
					...state,
					upcoming: action.payload
				}
			case 'past':
				return {
					...state,
					past: action.payload
				}
			
			default: return state;
		}
	}
	
	const initialMatches = {
		running: {},
		upcoming: {},
		past: {}
	};

	const [ matches, dispatch ] = useReducer(reducer, initialMatches, init);
	
	useEffect(() => {

		let runningIntervalID = null;
		let upcomingIntervalID = null;
		
		const queryParams = {
			params: {
				'page[size]' : 30,
				'filter[tournament_id]' : filteredTournaments.join()
			}
		};
		
		//const endpoints = ['running', 'upcoming', 'past' ];
		/* const endpoint1 = 'running'; 
		const endpoint2 = 'upcoming'; 
		const endpoint3 = 'past'; */
		
		async function getData(game, timeMatch, params) {
			
			try {
				const response = await API.get(`${game}/matches/${timeMatch}`, params);	
				dispatch({ type: timeMatch, payload: response });
			} catch (error) {
				console.error(error);
			}
			//console.log(params);
		};

		getData(game_name, 'running', queryParams);
		getData(game_name, 'upcoming', queryParams);
		getData(game_name, 'past', queryParams);

	/* 	let timerID = undefined;
		
		clearTimeout(timerID);
		
		timerID = setTimeout(() => {
			getData(game_name, 'running', queryParams);
		}, 5000); */

		/* timer = setInterval(() => {
			clearInterval(timer);
			getData(game_name, 'running', queryParams);
		}, 5000); */ 

		// setInterval(getData, 60000, game_name, 'upcoming', queryParams);
	
		// console.log(current_game === game_name);

		runningIntervalID = setInterval(() => {
			getData(game_name, 'running', queryParams);
		}, 5000);
		
		upcomingIntervalID = setInterval(() => {
			getData(game_name, 'upcoming', queryParams);
		}, 60000);		

		return () => {
			clearInterval(runningIntervalID);
			clearInterval(upcomingIntervalID);
		};
		
	}, [game_name, filteredTournaments]);
	
	return { matches }
}