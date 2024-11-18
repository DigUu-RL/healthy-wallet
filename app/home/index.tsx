// ** REACT
import { View } from 'react-native';

// ** COMPONENTS
import Text from '@/components/Text';

import { TAuth } from '@/types/contexts/auth';
import { useAuth } from '@/hooks/auth/useAuth';

const Home = () => {
	// * hooks
	const { user, accessToken }: TAuth = useAuth();

	return (
		<View>
			<Text>{JSON.stringify(user)}</Text>
			<Text>{JSON.stringify(accessToken)}</Text>
		</View>
	);
};

export default Home;
