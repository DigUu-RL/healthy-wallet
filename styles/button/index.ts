// ** REACT
import { StyleSheet } from 'react-native';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

export const styles = StyleSheet.create({
	base: {
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'System',
		fontSize: 16,
	},
});

export const variant = StyleSheet.create({
	contained: {
		backgroundColor: Colors.highlight.fuchsia,
		color: Colors.background.darker,
		fontWeight: 'bold',
	},
	outlined: {
		borderWidth: 1,
		borderColor: Colors.highlight.fuchsia,
		backgroundColor: 'transparent',
		color: Colors.highlight.fuchsia,
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

export const containedColor = StyleSheet.create({
	info: {
		backgroundColor: Colors.status.info,
	},
	success: {
		backgroundColor: Colors.status.success,
	},
	warning: {
		backgroundColor: Colors.status.warning,
	},
	error: {
		backgroundColor: Colors.status.error,
	},
});

export const outlinedColor = StyleSheet.create({
	info: {
		borderColor: Colors.status.info,
		color: Colors.status.info,
	},
	success: {
		borderColor: Colors.status.success,
		color: Colors.status.success,
	},
	warning: {
		borderColor: Colors.status.warning,
		color: Colors.status.warning,
	},
	error: {
		borderColor: Colors.status.error,
		color: Colors.status.error,
	},
});
