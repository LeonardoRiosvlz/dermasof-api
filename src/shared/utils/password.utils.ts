import { compareSync, hashSync } from 'bcrypt';

export default class PasswordUtils {
  public static hashPassword = (password: string): string => {
    return hashSync(password, 10);
  };

  public static compare = (
    plainPassword: string,
    hashPassword: string,
  ): boolean => {
    return compareSync(plainPassword, hashPassword);
  };

  public static isComplex(password: string): boolean {
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d].{8,}/;
    return re.test(password);
  }


  public static matchPassword(password: string, hashPassword: string): boolean {
    return compareSync(password, hashPassword);
  }

}
