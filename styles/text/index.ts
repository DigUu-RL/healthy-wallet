// ** REACT
import { StyleSheet } from 'react-native';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

export const styles = StyleSheet.create({
	base: {
		letterSpacing: 0.25,
		color: Colors.primary.lighter,
		fontFamily: 'System',
		fontWeight: '500',
	},
});

export const variant = StyleSheet.create({
	h1: {
		fontSize: 32,
		lineHeight: 40,
		fontWeight: '700',
	},
	h2: {
		fontSize: 28,
		lineHeight: 36,
		fontWeight: '600',
	},
	h3: {
		fontSize: 24,
		lineHeight: 32,
		fontWeight: '600',
	},
	h4: {
		fontSize: 20,
		lineHeight: 28,
		letterSpacing: 0.15,
	},
	h5: {
		fontSize: 18,
		lineHeight: 24,
		letterSpacing: 0.15,
	},
	h6: {
		fontSize: 16,
		lineHeight: 22,
		letterSpacing: 0.15,
	},
});
