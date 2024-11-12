// ** REACT
import { Button, StyleSheet, Text, View } from 'react-native';

// ** COMPONENTS
import { Card } from '@/components/card';
import Divider from '@/components/Divider';
import HealthyWalletText from '@/components/HealthyWalletText';

const Login = () => {
  return (
    <View style={styles.container}>
      <Card.Root>
        <Card.Header action={<Button title='teste' />}>
          <HealthyWalletText variant='h6'>Login</HealthyWalletText>
        </Card.Header>

        <Divider />

        <Card.Content>
          <Text>Login</Text>
        </Card.Content>

        <Card.Actions>
          <Card.Action title='Sign in' />
        </Card.Actions>
      </Card.Root>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    width: '30%',
  },
});

export default Login;
