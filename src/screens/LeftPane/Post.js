import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	item: {
		margin: '30px',
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: 'inline',
	},
}));

const Post = ({ item }) => {
	const classes = useStyles();
	return (
		<ListItem className={classes.item} alignItems='flex-start'>
			<ListItemAvatar>
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${item}.svg`}
				/>
			</ListItemAvatar>
			<ListItemText
				primary='Brunch this weekend?'
				secondary={
					<React.Fragment>
						<Typography
							component='span'
							variant='body2'
							className={classes.inline}
							color='textPrimary'>
							Ali Connors
						</Typography>
						{" — I'll be in your neighborhood doing errands this…"}
					</React.Fragment>
				}
			/>

		</ListItem>
	);
};

export default Post;
