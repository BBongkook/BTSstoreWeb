export class User {
  uiName: string
  uiId: string
  uiPwd: string
  uiTrans: number
  uiEmail: string
  uiAddr: string
  uiAddr2: string
  uiPhone: string

  constructor() {
  }
  doLogin(us: User): boolean {
    return false;
  }
}
