import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
	background-color: #87B018;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 1170px;
`;

const SiteName = styled.h1`
	line-height: 80px;
`;

const SiteVersion = styled.span`
	text-align: right;
	line-height: 80px;
`;

export const Header = () => {
	return (
		<Heading>
			<Container className="pure-g">
				<SiteName className="pure-u-1-2"> Match Observer { new Date().toLocaleTimeString() } </SiteName>
				<SiteVersion className="pure-u-1-2">v0.1</SiteVersion>
			</Container>
		</Heading>
	);
}