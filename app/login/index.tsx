// ** REACT
import { StyleSheet, View } from 'react-native';

// ** COMPONENTS
import { Card } from '@/components/card';
import Divider from '@/components/Divider';
import HealthyWalletText from '@/components/HealthyWalletText';

const Login = () => {
	return (
		<View style={styles.container}>
			<Card.Root>
				<Card.Header>
					<HealthyWalletText variant='h1'>Healthy Wallet</HealthyWalletText>
				</Card.Header>

				<Divider />

				<Card.Content>
					<HealthyWalletText>LOGIN</HealthyWalletText>
				</Card.Content>

				<Card.Actions>
					<Card.Action fullWidth title='Sign in' variant='contained' />
				</Card.Actions>
			</Card.Root>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 'auto',
		width: '30%',
	},
});

export default Login;
