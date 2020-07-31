import { IColor } from './icolor';
import { IColorHistory } from './icolor-history';

export interface IRandomColor {
  colors: IColor[];
  schemes: any[];
  schemes_history: any;
  success: boolean;
  colors_history: { [hex: string]: IColorHistory };
  messages: string[];
  new_color: string;
}
