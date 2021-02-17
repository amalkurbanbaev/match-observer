import React from 'react';
import styled from 'styled-components';

const BottomSite = styled.div`
	background-color: rgb(30 31 27 / 69%);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 130px;
	padding: 60px 0;
`;

const Container = styled.div`
	width: 1170px;
`;

const SiteName = styled.h1`
	
`;

const ApiStatus = styled.div`
	font-size: 14px;
    letter-spacing: 1px;
    margin-top: 10px;
`;

const SiteVersion = styled.span`
	text-align: right;
	
`;


export const Footer = () => {
	return (
		<BottomSite>
			<Container className="pure-g">
				<SiteName className="pure-u-1-2">Match Observer</SiteName>
				<SiteVersion className="pure-u-1-2">v0.1</SiteVersion>
				<ApiStatus className="pure-u-1-1">API Status: OK</ApiStatus>
			</Container>
		</BottomSite>
	);
}