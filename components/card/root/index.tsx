// ** REACT
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

interface ICardRootProps {
  children: ReactElement | ReactElement[];
}

const CardRoot = ({ children }: ICardRootProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.darker,
    borderCurve: 'circular',
    borderRadius: 10,
    shadowColor: Colors.primary.lighter,
    shadowRadius: 10,
    shadowOpacity: 0.1,
    padding: 15
  }
});

export default CardRoot;