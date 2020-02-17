import { Moment } from 'moment';

export interface IProcessLog {
  id?: number;
  fileName?: string;
  fileValue?: number;
  processDate?: Moment;
}

export const defaultValue: Readonly<IProcessLog> = {};
