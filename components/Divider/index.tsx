import { StyleSheet, View } from 'react-native';
import { Colors } from '@/constants/colors';

interface IDividerProps {
	orientation?: 'horizontal' | 'vertical';
}

const Divider = ({ orientation }: IDividerProps) => {
	return (
		<View
			style={[
				styles.divider,
				orientation === 'vertical' ? styles.vertical : styles.horizontal,
			]}
		/>
	);
};

const styles = StyleSheet.create({
	divider: {
		backgroundColor: Colors.primary.main,
		opacity: 0.2,
		borderRadius: 20,
	},
	horizontal: {
		width: '100%',
		height: 1,
		marginVertical: 5,
	},
	vertical: {
		height: '100%',
		width: 1,
		marginHorizontal: 5,
	},
});

export default Divider;
