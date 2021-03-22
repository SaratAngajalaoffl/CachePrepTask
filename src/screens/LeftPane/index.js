import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_posts } from '../../redux/actions/post_actions';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '80%',
	},
}));

const LeftPane = () => {
	const classes = useStyles();
	const [posts, setPosts] = useState([]);
	const posts_state = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(get_all_posts());
	}, [dispatch]);

	useEffect(() => {
		setPosts(posts_state);
	}, [posts_state]);

	return (
		<List className={classes.root}>
			<Post item={1} />
		</List>
	);
};

export default LeftPane;
