import { StyleSheet, Text, TextProps } from 'react-native';

interface IHealthyWalletTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const HealthyWalletText = ({ variant, ...rest }: IHealthyWalletTextProps) => {
  return <Text style={[styles.base, variant && styles[variant]]} {...rest} />;
};

const styles = StyleSheet.create({
  base: {
    letterSpacing: 0.25,
    color: '#000000',
    fontFamily: 'System',
    fontWeight: '500',
  },
  h1: {
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 16,
    fontWeight: '700',
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 14,
    fontWeight: '600',
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 12,
    fontWeight: '600',
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 10,
    letterSpacing: 0.15,
  },
  h5: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 8,
    letterSpacing: 0.15,
  },
  h6: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 6,
    letterSpacing: 0.15,
  },
});

export default HealthyWalletText;
