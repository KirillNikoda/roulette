import { Box, makeStyles } from '@material-ui/core';
import { DepositForm } from './components/DepositForm';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#303F9F',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0 20px',
	},
});

export const Main = () => {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			<DepositForm />
		</Box>
	);
};
