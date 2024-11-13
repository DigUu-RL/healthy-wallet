// ** COMPONENTS
import HealthyWalletButton, {
	IHealthyWalletButtonProps,
} from '@/components/HealthyWalletButton';

const CardAction = ({ title, ...rest }: IHealthyWalletButtonProps) => {
	return <HealthyWalletButton title={title} {...rest} />;
};

export default CardAction;
