export class Product {

  pnum: number;
  pname: string;
  pamount: number;
  pprice: number;
  pimageUrl: String;
  pimageFile:File;
  pcredat: String;
  plarge: String;
  pmedium: String;
  psmall: String;
  pcontent: String;
  pcount: number;

  constructor() {

  }
  product(product: Product): boolean {
    return false;
  }
}
