import { expect } from 'expect'
import { allItems } from './__testUtils/data'
import { CostCalculator } from './index'

describe('ShoppingCart', () => {
  let costCalculator: CostCalculator

  describe('calculate()', () => {
    beforeEach(() => {
      costCalculator = new CostCalculator()
    })
    it('should return total price of all items', () => {
      expect(costCalculator.calculate(allItems)).toEqual(19.34)
    })
    it('should return 0 for no items', () => {
      expect(costCalculator.calculate([])).toEqual(0)
    })
  })
})
