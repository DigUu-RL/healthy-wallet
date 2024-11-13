// ** REACT
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

interface ICardContentProps {
	children: ReactElement | ReactElement[];
}

const CardContent = ({ children }: ICardContentProps) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {}
});

export default CardContent;
