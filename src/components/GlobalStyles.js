import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	body,
	html,
	#root {
		height: 100%;
	}

	html {
		box-sizing: border-box;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	body {
		font-family: 'Roboto', sans-serif;
		background-color: #121212;
		color: #FBFBFB;
	}
	
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	h1, h2, h3, p {
		font-size: 24px;
		padding: 0;
		margin: 0;
		font-weight: 500;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
	.circle {
		margin: 25px 10px;
		width: 200px;
		color: #fff;
		font-size: 32px;
		line-height: 200px;
		text-align: center;
		height: 200px;
		border-radius: 100px;
	}
	.bg-yellow {
		background: #ffcc35;
	}
	.bg-green {
		background: #5bd5a0;
	}
	.bg-red {
		background: #eb3980;
	}
	.bg-sky {
		background-color: skyblue!important;
	}
`;

export default GlobalStyles;