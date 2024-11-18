// ** REACT
import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

// ** TYPES
import { TAuthContext } from '@/types/contexts/auth';

// ** CONTEXTS
import { AuthContext } from '@/contexts/auth';

// ** COMPONENTS
import { Card } from '@/components/card';
import Divider from '@/components/Divider';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Loading from '@/components/Loading';
import { showToast } from '@/components/Toast';

const SignIn = () => {
	// * hooks
	const { login }: TAuthContext = useContext(AuthContext);

	// * states
	const [loading, setLoading] = useState<boolean>(false);
	const [loginValue, setLoginValue] = useState<string>('');
	const [passwordValue, setPasswordValue] = useState<string>('');

	// * handles
	const onLogin = (): void => {
		setLoading(true);

		login({
			login: loginValue,
			password: passwordValue,
		})
			.catch((error) =>
				showToast({
					type: 'error',
					title: 'Ocorreu um erro ao realizar o login',
					message: error.message,
				}),
			)
			.finally(() => setLoading(false));
	};

	return (
		<View style={styles.container}>
			<Card.Root>
				<Card.Header>
					<Text variant='h1'>Healthy Wallet</Text>
				</Card.Header>

				<Divider />

				<Card.Content>
					<Input label='Login' onChangeText={setLoginValue} />
					<Input label='Password' onChangeText={setPasswordValue} />
				</Card.Content>

				<Card.Actions>
					<Card.Action
						fullWidth
						title='Sign in'
						variant='contained'
						onPress={onLogin}
					/>
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
