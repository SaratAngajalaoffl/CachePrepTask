import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';

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
		</Grid>
	);
}

export default RightPane;
