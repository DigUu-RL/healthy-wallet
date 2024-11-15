// ** REACT
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// ** COMPONENTS
import { Card } from '@/components/card';
import Divider from '@/components/Divider';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Loading from '@/components/Loading';

const SignIn = () => {
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			<Card.Root>
				<Card.Header>
					<Text variant='h1'>Healthy Wallet</Text>
				</Card.Header>

				<Divider />

				<Card.Content>
					<Input label='Login' />
					<Input label='Password' />
				</Card.Content>

				<Card.Actions>
					<Card.Action fullWidth title='Sign in' variant='contained' />
				</Card.Actions>
			</Card.Root>

			{loading && <Loading />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 'auto',
		width: '30%',
	},
});

export default SignIn;
