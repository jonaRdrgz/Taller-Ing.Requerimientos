export class User {
  usersPk: number;
  name: string;

  constructor(usersPk: number, name: string) {
    this.usersPk = usersPk;
    this.name = name;
  }
}
