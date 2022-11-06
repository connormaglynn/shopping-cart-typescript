import { Item } from './model'

export class Items {
  constructor(private items: Item[]) {}

  getTotalPrice(): number {
    let total = 0
    this.items.forEach((item) => {
      total += item.price
    })
    return total
  }
}
