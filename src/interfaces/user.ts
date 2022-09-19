import { ObjectId } from 'bson';

export enum Status {
  Student = 'STUDENT',
  Company = 'COMPANY',
}

export interface User {
  id: string;
  password: string;
  name: string;
  numID: string;
  status: Status;
}
