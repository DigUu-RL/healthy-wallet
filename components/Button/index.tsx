// ** REACT
import {
	Pressable,
	PressableProps,
	PressableStateCallbackType,
} from 'react-native';

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
	const getStyle = ({ pressed }: PressableStateCallbackType) => {
		return [
			styles.base,
			variant && variantStyles[variant],
			size ? sizeStyles[size] : sizeStyles.medium,
			color &&
				(variant === 'outlined' ? outlinedColor[color] : containedColor[color]),
			pressed && styles.pressed,
		];
	};

	return (
		<Pressable {...rest} style={({ pressed }) => getStyle({ pressed })}>
			{title}
		</Pressable>
	);
};

export default Button;
