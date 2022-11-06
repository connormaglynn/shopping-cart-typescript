import { Discount } from './model'
import { Items } from '../items'
import { ProductCode } from '../model'

export class BuyOneGetOneFree implements Discount {
  constructor(readonly applicableProductCode: ProductCode) {}

  getDiscountValue(items: Items): number {
    const bogofItems = items.filterByProductCode(this.applicableProductCode)
    const applicableItemsCleanedForDiscount =
      bogofItems.removeOneProductIfLengthIsOdd()
    const valueOfApplicableItems =
      applicableItemsCleanedForDiscount.getTotalPrice()
    return valueOfApplicableItems / 2
  }
}
