// ** COMPONENTS
import Button, { IHealthyWalletButtonProps } from '@/components/Button';

const CardAction = ({ title, ...rest }: IHealthyWalletButtonProps) => {
	return <Button title={title} {...rest} />;
};

export default CardAction;
