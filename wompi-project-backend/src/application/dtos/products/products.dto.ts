export class ProductDto {
  readonly idProduct: number;
  readonly nameProduct: string;
  readonly priceProduct: number;
  readonly stock: number;
  readonly categoryProduct?: string;
  readonly imageUrl?: string;
}
