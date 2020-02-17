import { IProcessLog } from 'app/shared/model/process-log.model';

export interface IContent {
  id?: number;
  dataContentType?: string;
  data?: any;
  document?: IProcessLog;
}

export const defaultValue: Readonly<IContent> = {};
