// ** REACT
import {
	ForwardedRef,
	forwardRef,
	ForwardRefExoticComponent,
	ReactElement,
	RefAttributes,
	useState,
} from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

// ** STYlES
import { styles } from '@/styles/input';
import { styles as textStyles } from '@/styles/text';

// ** COMPONENTS
import Text from '@/components/Text';

interface IInputProps extends TextInputProps {
	required?: boolean;
	label?: string;
}

const Input: ForwardRefExoticComponent<IInputProps & RefAttributes<TextInput>> =
	forwardRef<TextInput, IInputProps>(
		(
			{ label, ...rest }: IInputProps,
			ref: ForwardedRef<TextInput>,
		): ReactElement => {
			// * states
			const [isFocused, setIsFocused] = useState<boolean>(false);

			return (
				<View style={styles.container}>
					{label && <Text style={styles.label}>{label}</Text>}

					<TextInput
						style={[styles.input, textStyles.base, isFocused && styles.focus]}
						ref={ref}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						underlineColorAndroid='transparent'
						{...rest}
					/>
				</View>
			);
		},
	);

export default Input;
