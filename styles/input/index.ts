// ** REACT
import { StyleSheet } from 'react-native';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

export const styles = StyleSheet.create({
	container: { width: '100%', marginTop: 10 },
	input: {
		height: 45,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: Colors.primary.light,
		marginTop: 4,
		padding: 10,
	},
	label: {},
	focus: {
		borderColor: `${Colors.highlight.fuchsia} !important`,
	},
});
