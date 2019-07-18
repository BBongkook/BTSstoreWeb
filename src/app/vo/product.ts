export class Product {

  pNum: number;
  pName: string;
  pAmount: number;
  pPrice: number;
  pImageUrl: String;
  pImageFile:File;
  pCredat: String;
  pLarge: String;
  pMedium: String;
  pSmall: String;
  pContent: String;
  pCount: number;

  constructor() {

  }
  product(product: Product): boolean {
    return false;
  }
}
