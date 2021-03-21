import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '80%',
	},
}));

const LeftPane = () => {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
			<Post item={1} />
		</List>
	);
};

export default LeftPane;
