// ** REACT
import { Pressable, PressableProps } from 'react-native';

// ** CONSTANTS
// ** TYPES
import { TColor, TSize, TVariant } from '@/types/colors';

// ** COMPONENTS
import HealthyWalletText from '@/components/HealthyWalletText';
import {
	size as sizeStyles,
	styles,
	variant as variantStyles,
} from '@/styles/button';

export interface IHealthyWalletButtonProps extends PressableProps {
	title: string;
	fullWidth?: boolean;
	variant?: TVariant;
	color?: TColor;
	size?: TSize;
}

const HealthyWalletButton = ({
	title,
	fullWidth,
	variant,
	color,
	size,
	...rest
}: IHealthyWalletButtonProps) => {
	const buttonStyles = [
		styles.base,
		variant && variantStyles[variant],
		size ? sizeStyles[size] : sizeStyles.medium,
	];

	const textStyles = [
		variant
			? variant === 'outlined'
				? variantStyles.outlinedText
				: variantStyles.containedText
			: undefined,
	];

	return (
		<Pressable {...rest} style={buttonStyles}>
			<HealthyWalletText style={[textStyles]}>{title}</HealthyWalletText>
		</Pressable>
	);
};

export default HealthyWalletButton;
