import { ProductCode } from '../model'
import { Items } from '../items'

export interface Discount {
  readonly applicableProductCode: ProductCode

  getDiscountValue(items: Items): number
}
