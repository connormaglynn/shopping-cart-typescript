import { Items } from './items'
import { ProductCode } from './model'

export class CostCalculator {
  public calculate(items: Items): number {
    const discountTotal = this.getDiscount(items)
    const totalCost = items.getTotalPrice()
    const totalCostWithDiscounts = totalCost - discountTotal
    return Number(totalCostWithDiscounts.toFixed(2))
  }

  private getDiscount(items: Items): number {
    const bogofItems = items.filterByProductCode(ProductCode.FR1)
    const applicableItemsCleanedForDiscount =
      bogofItems.removeOneProductIfLengthIsOdd()
    const valueOfApplicableItems =
      applicableItemsCleanedForDiscount.getTotalPrice()
    return valueOfApplicableItems / 2
  }
}
