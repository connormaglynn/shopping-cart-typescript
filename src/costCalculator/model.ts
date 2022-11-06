export class Item {
  constructor(
    readonly productCode: ProductCode,
    readonly name: string,
    readonly price: number
  ) {}
}

export enum ProductCode {
  FR1 = 'FR1',
  SR1 = 'SR1',
  CF1 = 'CF1',
}
