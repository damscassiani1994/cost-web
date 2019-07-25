import { IUser } from './user';

export class User {
  constructor(
    public user: IUser,
    public token: string
  ) {}
}
