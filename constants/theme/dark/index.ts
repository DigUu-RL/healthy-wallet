// ** REACT
import type { Theme } from '@react-navigation/native/src/types';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

export const HealthyWalletDarkTheme: Theme = {
	dark: true,
	colors: {
		primary: Colors.primary.main,
		background: Colors.background.darker,
		card: Colors.background.dark,
		text: Colors.primary.lighter,
		border: Colors.primary.lighter,
		notification: 'rgb(255, 69, 58)',
	},
};
