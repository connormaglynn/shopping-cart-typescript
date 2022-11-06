import { expect } from 'expect'
import { Items } from '../items'
import { BuyOneGetOneFree } from './buyOneGetOneFree'
import { coffee, fruitTea, strawberries } from '../__testUtils/data'

describe('BuyOneGetOneFree', () => {
  let buyOneGetOneFree: BuyOneGetOneFree

  describe('getDiscountTotal()', () => {
    it('should return 0 for no applicable items', () => {
      buyOneGetOneFree = new BuyOneGetOneFree(fruitTea.productCode)
      expect(
        buyOneGetOneFree.getDiscountValue(
          new Items([fruitTea, strawberries, coffee])
        )
      ).toEqual(0)
    })

    it('should return discount value for applicable items', () => {
      buyOneGetOneFree = new BuyOneGetOneFree(fruitTea.productCode)
      expect(
        buyOneGetOneFree.getDiscountValue(
          new Items([fruitTea, fruitTea, strawberries, coffee])
        )
      ).toEqual(fruitTea.price)
    })

    it('should ignore odd number of applicable items', () => {
      buyOneGetOneFree = new BuyOneGetOneFree(fruitTea.productCode)
      expect(
        buyOneGetOneFree.getDiscountValue(
          new Items([fruitTea, fruitTea, strawberries, coffee, fruitTea])
        )
      ).toEqual(fruitTea.price)
    })
  })
})
