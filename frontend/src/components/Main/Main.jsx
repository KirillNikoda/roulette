import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#3f51b5',
		height: '100vh',
	},
});

export const Main = () => {
	const styles = useStyles();

	return <Box className={styles.root}>123</Box>;
};
