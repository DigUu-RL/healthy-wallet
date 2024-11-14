// ** CONSTANTS
import { Colors } from '@/constants/colors';
import { TColor } from '@/types/colors';

export const getColor = (color: TColor): string => Colors.status[color];
