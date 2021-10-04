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
	},
});

export const Header = () => {
	const [disabled, setDisabled] = useState(false);

	const styles = useStyles();

	const connectWallet = async () => {
		if (typeof window.ethereum !== 'undefined') {
			setDisabled(true);
			await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
		}
	};

	useEffect(() => {
		if (typeof window.ethereum !== 'undefined') {
			window.ethereum
				.request({
					method: 'eth_requestAccounts',
				})
				.then(async (accounts) => {
					const signer = new ethers.providers.Web3Provider(
						window.ethereum
					).getSigner();
					const address = await signer.getAddress();

					console.log(address, accounts);

					if (accounts.includes(address.toLocaleLowerCase())) {
						setDisabled(true);
					}
				});
		}
	}, []);

	return (
		<header>
			<Box className={styles.root}>
				<Button
					disabled={disabled}
					onClick={connectWallet}
					className={styles.btn}
					variant='outlined'
				>
					Connect Wallet
				</Button>
			</Box>
		</header>
	);
};
