import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LeftPane from '../LeftPane';
import RightPane from '../RightPane';

const MainContainer = styles(Grid)`
	height: 100vh;
	width: 100vw;
	background-color: #f1f1f1;
`;

const LeftContainer = styles(Grid)`
	display:grid;
	max-height:100%;
	place-items:center;
	overflow-y:scroll;
`;

const RightContainer = styles(Grid)`
	display:grid;
	max-height:100%;
	overflow-y:scroll;
	padding:50px;
`;

function Main() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<MainContainer container>
			<LeftContainer item xs={12} md={8}>
				<LeftPane />
			</LeftContainer>
			{matches ? (
				<RightContainer item xs={0} md={4}>
					<RightPane />
				</RightContainer>
			) : null}
		</MainContainer>
	);
}

export default Main;
