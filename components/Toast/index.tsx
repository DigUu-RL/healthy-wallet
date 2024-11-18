// ** REACT
import { StyleSheet } from 'react-native';
import ReactNativeToast, {
	BaseToast,
	ToastConfig,
	ToastConfigParams,
} from 'react-native-toast-message';

// ** TYPES
import { TColor } from '@/types/colors';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

// ** STYLES
import { styles, variant } from '@/styles/text';

const config: ToastConfig = {
	info: (params: ToastConfigParams<any>) => (
		<BaseToast
			{...params}
			style={[toastStyles.container, toastStyles.info]}
			text1Style={[styles.base, variant.h6, titleStyles.info]}
			text2Style={[styles.base, messageStyles.info]}
		/>
	),
	success: (params: ToastConfigParams<any>) => (
		<BaseToast
			{...params}
			style={[toastStyles.container, toastStyles.success]}
			text1Style={[styles.base, variant.h6, titleStyles.success]}
			text2Style={[styles.base, messageStyles.success]}
		/>
	),
	warning: (params: ToastConfigParams<any>) => (
		<BaseToast
			{...params}
			style={[toastStyles.container, toastStyles.warning]}
			text1Style={[styles.base, variant.h6, titleStyles.warning]}
			text2Style={[styles.base, messageStyles.warning]}
		/>
	),
	error: (params: ToastConfigParams<any>) => (
		<BaseToast
			{...params}
			style={[toastStyles.container, toastStyles.error]}
			text1Style={[styles.base, variant.h6, titleStyles.error]}
			text2Style={[styles.base, messageStyles.error]}
		/>
	),
};

const toastStyles = StyleSheet.create({
	container: { backgroundColor: Colors.background.dark },
	info: { borderLeftColor: Colors.status.info },
	success: { borderLeftColor: Colors.status.success },
	warning: { borderLeftColor: Colors.status.warning },
	error: { borderLeftColor: Colors.status.error },
});

const titleStyles = StyleSheet.create({
	info: { color: Colors.status.info },
	success: { color: Colors.status.success },
	warning: { color: Colors.status.warning },
	error: { color: Colors.status.error },
});

const messageStyles = StyleSheet.create({
	info: { color: Colors.status.info },
	success: { color: Colors.status.success },
	warning: { color: Colors.status.warning },
	error: { color: Colors.status.error },
});

interface IShowToastProps {
	type: TColor;
	title: string;
	message: string;
}

const Toast = () => <ReactNativeToast config={config} />;

export const showToast = ({ type, title, message }: IShowToastProps): void => {
	ReactNativeToast.show({
		type,
		text1: title,
		text2: message,
	});
};

export default Toast;
