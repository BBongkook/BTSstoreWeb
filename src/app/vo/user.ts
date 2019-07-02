export class User {
  uiNum: number
  uiName: string
  uiId: string
  uiPwd: string
  uiTrans: number
  uiEmail: string
  uiZipcode: number
  uiAddr: string
  uiAddr2: string
  uiPhone: string
  uiAuth: string

  constructor() {
  }
  doLogin(us: User): boolean {
    return false;
  }
}
