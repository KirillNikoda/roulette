import { Box, Button, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import * as ethers from 'ethers';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#303F9F',
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '10px 10px',
	},
	btn: {
		color: '#fff',
		backgroundColor: '#AD1457',
	},
});

export const Header = () => {
	const [disabled, setDisabled] = useState(false);

	const styles = useStyles();

	const connectWallet = async () => {
		if (typeof window.ethereum !== 'undefined') {
			console.log(window.ethereum);
			try {
				setDisabled(true);
				await window.ethereum.request({
					method: 'eth_requestAccounts',
				});
			} catch (e) {
				setDisabled(false);
			}
		}
	};

	useEffect(() => {
		if (
			typeof window.ethereum !== 'undefined' &&
			window.ethereum._state.isConnected
		) {
			setDisabled(true);
		}
	}, []);

	return (
		<header>
			<Box className={styles.root}>
				<Button
					onClick={connectWallet}
					disabled={disabled}
					className={styles.btn}
					variant='outlined'
					color='default'
				>
					Connect Wallet
				</Button>
			</Box>
		</header>
	);
};
