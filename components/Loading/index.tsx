// ** REACT
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

const Loading = () => {
	return (
		<Modal visible transparent animationType='fade'>
			<View style={styles.overlay}>
				<ActivityIndicator size='large' color={Colors.highlight.fuchsia} />
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Loading;
