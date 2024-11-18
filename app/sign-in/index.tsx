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
import { TError } from '@/types';

const SignIn = () => {
	// * hooks
	const { signIn }: TAuthContext = useContext(AuthContext);

	// * states
	const [loading, setLoading] = useState<boolean>(false);
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	// * handles
	const onLogin = (): void => {
		setLoading(true);

		signIn({
			login,
			password,
		})
			.catch((error: TError) =>
				showToast({
					type: 'error',
					title: error.error,
					message: error.innerError ?? 'Ocorreu um erro ao realizar o login',
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
					<Input label='Login' onChangeText={setLogin} />
					<Input label='Password' onChangeText={setPassword} />
				</Card.Content>

				<Card.Actions>
					<Card.Action title='Sign up now!' />

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
