import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_posts } from '../../redux/actions/post_actions';
import { get_all_comments } from '../../redux/actions/comment_actions';
import LeftPane from '../LeftPane';
import ReactLoading from 'react-loading';
import RightPane from '../RightPane';
import { Route, Switch } from 'react-router';
import PostScreen from '../PostScreen';

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

const LoadingContainer = styles.div`
	width:100%;
	height:100%;
	background-color:#ffffff;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
`;

function Main() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));
	const dispatch = useDispatch();
	const posts_state = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(get_all_posts());
		dispatch(get_all_comments());
	}, []);

	if (posts_state.loading)
		return (
			<LoadingContainer>
				<ReactLoading
					type='bubbles'
					delay={0}
					color='#87CEFA'
					height={'10%'}
					width={'10%'}
				/>
			</LoadingContainer>
		);

	return (
		<MainContainer container>
			<LeftContainer item xs={12} md={8}>
				<Switch>
					<Route exact path='/'>
						<LeftPane />
					</Route>
					<Route exact path='/post/:postID'>
						<PostScreen />
					</Route>
				</Switch>
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
