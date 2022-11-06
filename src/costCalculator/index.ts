import { Items } from './items'

export class CostCalculator {
  public calculate(items: Items): number {
    return items.getTotalPrice()
  }
}
