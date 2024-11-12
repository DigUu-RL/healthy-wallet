// ** REACT
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

interface ICardHeaderProps {
  children: ReactElement | ReactElement[];
  action?: ReactElement | ReactElement[];
}

const CardHeader = ({ children, action }: ICardHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>{children}</View>
      <View style={styles.action}>{action}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  children: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  action: {},
});

export default CardHeader;
