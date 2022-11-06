import { expect } from 'expect'
import { allItems } from './__testUtils/data'
import { CostCalculator } from './index'
import { Items } from './items'

describe('ShoppingCart', () => {
  let costCalculator: CostCalculator

  describe('calculate()', () => {
    beforeEach(() => {
      costCalculator = new CostCalculator()
    })
    it('should return total price of all items', () => {
      expect(costCalculator.calculate(new Items(allItems))).toEqual(19.34)
    })
    it('should return 0 for no items', () => {
      expect(costCalculator.calculate(new Items([]))).toEqual(0)
    })
  })
})
