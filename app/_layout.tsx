// ** EXPO
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// ** REACT
import { useEffect } from 'react';
import { ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

// ** COMPONENTS
import HealthyWalletProvider from '@/contexts';
import { AuthGuard } from '@/guards/auth-guard';

// ** TYPES
import { HealthyWalletDarkTheme } from '@/constants/theme/dark';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()
	.then((value: boolean) => console.log(value))
	.catch((error) => console.error(error));

const RootLayout = () => {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
				.then((value: boolean) => console.log(value))
				.catch((error) => console.error(error));
		}
	}, [loaded]);

	if (!loaded) return null;

	return (
		<HealthyWalletProvider>
			<AuthGuard>
				<ThemeProvider value={HealthyWalletDarkTheme}>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name='(tabs)' />
						<Stack.Screen name='+not-found' />
					</Stack>
				</ThemeProvider>
			</AuthGuard>
		</HealthyWalletProvider>
	);
};

export default RootLayout;
