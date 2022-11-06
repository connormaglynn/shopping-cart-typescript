import { Item } from './model'

export class CostCalculator {
  public calculate(items: Item[]): number {
    let total = 0
    items.forEach((item) => {
      total += item.price
    })
    return total
  }
}
