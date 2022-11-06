import { Items } from './items'
import { Discounts } from './discount/discounts'

export class CostCalculator {
  public discounts: Discounts = new Discounts([])

  public calculate(items: Items): number {
    const discountTotal = this.discounts.getDiscountTotal(items)
    const totalCost = items.getTotalPrice()
    const totalCostWithDiscounts = totalCost - discountTotal
    return Number(totalCostWithDiscounts.toFixed(2))
  }
}
