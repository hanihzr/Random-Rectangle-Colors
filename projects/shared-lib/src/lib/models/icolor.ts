import { ITag } from './itag';

export interface IColor {
  timestamp: number;
  hex: string;
  id: number;
  tags: ITag[];
}
