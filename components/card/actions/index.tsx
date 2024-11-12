// ** REACT
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

interface ICardActionsProps {
  children: ReactElement | ReactElement[];
}

const CardActions = ({ children }: ICardActionsProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {}
});

export default CardActions;
