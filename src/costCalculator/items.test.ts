import { expect } from 'expect'
import { allItems, fruitTea } from './__testUtils/data'
import { Items } from './items'

describe('Items', () => {
  let items: Items

  describe('getTotalPrice()', () => {
    it('should return total price of all items', () => {
      items = new Items(allItems)
      expect(items.getTotalPrice()).toEqual(19.34)
    })
    it('should return 0 for no items', () => {
      items = new Items([])
      expect(items.getTotalPrice()).toEqual(0)
    })
  })

  describe('filterByProductCode()', () => {
    it('should filter out all items except fruit tea', () => {
      items = new Items(allItems)
      expect(items.filterByProductCode(fruitTea.productCode)).toEqual(
        new Items([fruitTea])
      )
    })
  })

  describe('removeOneProductIfLengthIsOdd()', () => {
    it('should remove one item if length is odd number', () => {
      items = new Items([fruitTea, fruitTea, fruitTea])
      expect(items.removeOneProductIfLengthIsOdd()).toEqual(
        new Items([fruitTea, fruitTea])
      )
    })
    it('should not remove any item if length is even', () => {
      items = new Items([fruitTea, fruitTea, fruitTea, fruitTea])
      expect(items.removeOneProductIfLengthIsOdd()).toEqual(
        new Items([fruitTea, fruitTea, fruitTea, fruitTea])
      )
    })
  })
})
