import { Moment } from 'moment';

export interface IProcessLog {
  id?: number;
  fileName?: string;
  fileValue?: string;
  processDate?: Moment;
}

export const defaultValue: Readonly<IProcessLog> = {};
