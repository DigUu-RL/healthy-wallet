// ** REACT
import { StyleSheet } from 'react-native';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

export const styles = StyleSheet.create({
	base: {
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
});

export const variant = StyleSheet.create({
	contained: {
		backgroundColor: Colors.primary.light,
	},
	outlined: {
		borderWidth: 1,
		borderColor: Colors.primary.light,
		backgroundColor: 'transparent',
	},
	containedText: {
		color: Colors.background.darker,
		fontWeight: 'bold',
	},
	outlinedText: {
		color: Colors.primary.light,
	},
});

export const size = StyleSheet.create({
	small: {
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
	medium: {
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
	large: {
		paddingVertical: 14,
		paddingHorizontal: 20,
	},
});
