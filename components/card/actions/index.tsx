// ** REACT
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

interface ICardActionsProps {
	children: ReactElement | ReactElement[];
}

const CardActions = ({ children }: ICardActionsProps) => {
	const renderContent = (): ReactElement | ReactElement[] => {
		if (Array.isArray(children)) {
			return children.map((child: ReactElement, index: number) => (
				<View key={index} style={index !== children.length - 1 && styles.item}>
					{child}
				</View>
			));
		}

		return children;
	};

	return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	item: {
		marginRight: 5,
	},
});

export default CardActions;
