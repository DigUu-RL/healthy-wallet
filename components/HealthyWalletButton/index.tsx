// ** REACT
import { Pressable, PressableProps, StyleSheet } from 'react-native';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

// ** TYPES
import { TColor, TVariant } from '@/types/contexts/colors';

// ** COMPONENTS
import HealthyWalletText from '@/components/HealthyWalletText';

export interface IHealthyWalletButtonProps extends PressableProps {
	title: string;
	fullWidth?: boolean;
	variant?: TVariant;
	color?: TColor;
	size?: 'small' | 'medium' | 'large';
}

const HealthyWalletButton = ({
	title,
	fullWidth,
	variant,
	color,
	size,
	...rest
}: IHealthyWalletButtonProps) => {
	// * handles
	const getButtonStyles = (
		variant: TVariant | undefined,
		color: TColor | undefined,
	) => {
		if (variant === 'outlined') {
			return {
				button: {
					borderWidth: 1,
					borderColor: Colors.status[color || 'info'],
					backgroundColor: 'transparent',
				},
				text: {
					color: Colors.status[color || 'info'],
				},
			};
		}

		return {
			button: {
				backgroundColor: Colors.status[color || 'info'],
			},
			text: {
				color: Colors.background.darker,
			},
		};
	};

	// * variables
	const { button, text } = getButtonStyles(variant, color);

	return (
		<Pressable
			{...rest}
			style={[
				buttonStyles.base,
				variant && variantStyles[variant],
				size ? sizeStyles[size] : sizeStyles.medium,
				color && button,
				fullWidth && { width: '100%' },
			]}
		>
			<HealthyWalletText
				style={[variant && variantStyles[`${variant}Text`], color && text]}
			>
				{title}
			</HealthyWalletText>
		</Pressable>
	);
};

const buttonStyles = StyleSheet.create({
	base: {
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
});

const variantStyles = StyleSheet.create({
	contained: {
		backgroundColor: Colors.primary.light,
	},
	outlined: {
		borderWidth: 1,
		borderColor: Colors.primary.light,
		backgroundColor: 'transparent',
	},
	containedText: {
		color: Colors.background.darker,
		fontWeight: 'bold',
	},
	outlinedText: {
		color: Colors.primary.light,
	},
});

const sizeStyles = StyleSheet.create({
	small: {
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
	medium: {
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
	large: {
		paddingVertical: 14,
		paddingHorizontal: 20,
	},
});

export default HealthyWalletButton;
