import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '90%',
		width: '100%',
		backgroundColor: '#ffffff',
		padding: '20px',
	},
}));

function RightPane() {
	const classes = useStyles();
	const posts_state = useSelector((state) => state.posts);

	return (
		<Grid container className={classes.root} spacing={5}>
			<Grid item xs={12}>
				<FormControl variant='outlined' fullWidth>
					<InputLabel htmlFor='outlined-adornment-amount'>
						Search
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-amount'
						startAdornment={
							<InputAdornment position='start'>
								<IconButton>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						}
						labelWidth={60}
					/>
				</FormControl>
			</Grid>
			{posts_state.posts.slice(0, 10).map((item) => (
				<Grid item xs={12}>
					<a href={`#${item.id}`}>{`${item.body.slice(0, 55)}...`}</a>
				</Grid>
			))}
		</Grid>
	);
}

export default RightPane;
