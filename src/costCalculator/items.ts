import { Item, ProductCode } from './model'

export class Items {
  constructor(private items: Item[]) {}

  getTotalPrice(): number {
    let total = 0
    this.items.forEach((item) => {
      total += item.price
    })
    return total
  }

  filterByProductCode(productCode: ProductCode): Items {
    return new Items(
      this.items.filter((item) => productCode.includes(item.productCode))
    )
  }

  removeOneProductIfLengthIsOdd(): Items {
    const evenNumberOfItems = new Items(this.items)
    if (this.items.length % 2 === 1) {
      evenNumberOfItems.items.pop()
    }
    return evenNumberOfItems
  }
}
