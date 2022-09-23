export enum Identity {
  Student = 'STUDENT',
  Company = 'COMPANY',
}

export interface User {
  courseList: string[];
}

export interface UserSignUp extends User {
  name: string;
  id: string;
  password: string;
  identity: Identity;
  personID: string;
}
