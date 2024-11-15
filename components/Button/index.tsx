// ** REACT
import { Pressable, PressableProps } from 'react-native';

// ** TYPES
import { TColor, TSize, TVariant } from '@/types/colors';

// ** STYLES
import {
	containedColor,
	outlinedColor,
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

const Button = ({
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
		color &&
			(variant === 'outlined' ? outlinedColor[color] : containedColor[color]),
	];

	return (
		<Pressable {...rest} style={buttonStyles}>
			{title}
		</Pressable>
	);
};

export default Button;
