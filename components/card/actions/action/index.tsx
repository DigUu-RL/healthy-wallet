// ** REACT
import { Button, ButtonProps } from 'react-native';

const CardAction = ({ ...rest }: ButtonProps) => {
  return <Button {...rest}></Button>;
};

export default CardAction;
