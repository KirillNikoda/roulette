import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	TextField,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		height: '250px',
		width: '400px',
		transform: 'translateY(-50%)',
	},
	btn: {
		width: '100%',
		backgroundColor: '#AD1457',
		color: '#fff',
		'&:hover': {
			color: '#000',
		},
	},
	heading: {
		textAlign: 'center',
		marginBottom: '10px',
	},
	input: {
		width: '100%',
	},
});

export const DepositForm = () => {
	const styles = useStyles();
	return (
		<Card className={styles.root}>
			<CardContent>
				<Typography className={styles.heading} variant='h6'>
					Deposit your ERC20 tokens to the pool
				</Typography>

				<TextField
					className={styles.input}
					placeholder='Amount to deposit'
					id='filled-basic'
					label='Deposit your tokens'
					variant='filled'
					type='number'
				/>
			</CardContent>
			<CardActions>
				<Button className={styles.btn} variant='contained'>
					Deposit ERC20
				</Button>
			</CardActions>
		</Card>
	);
};
