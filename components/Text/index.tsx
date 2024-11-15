// ** REACT
import { Text as ReactNativeText, TextProps } from 'react-native';

// ** STYLES
import { styles, variant as variantStyles } from '@/styles/text';

interface IHealthyWalletTextProps extends TextProps {
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Text = ({ variant, style, ...rest }: IHealthyWalletTextProps) => {
	return (
		<ReactNativeText
			style={[styles.base, variant && variantStyles[variant], style]}
			{...rest}
		/>
	);
};

export default Text;
