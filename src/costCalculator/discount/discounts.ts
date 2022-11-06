import { Discount } from './model'
import { Items } from '../items'

export class Discounts {
  constructor(private discounts: Discount[]) {}

  getDiscountTotal(items: Items) {
    let discountTotal = 0
    this.discounts.forEach((discount) => {
      discountTotal += discount.getDiscountValue(items)
    })
    return discountTotal
  }
}
