export class AlertMessage  {
  public static classes = 'rounded';
  static requiredField(nameField: string): string {
    return `El campo ${nameField} es obligatorio`;
  }
  static authFaild(): string {
    return `EL username o la contraseña son incorrectas`;
  }
}
