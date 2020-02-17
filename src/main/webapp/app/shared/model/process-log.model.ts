import { Moment } from 'moment';
import { IContent } from 'app/shared/model/content.model';

export interface IProcessLog {
  id?: number;
  fileName?: string;
  fileValue?: number;
  processDate?: Moment;
  content?: IContent;
}

export const defaultValue: Readonly<IProcessLog> = {};
