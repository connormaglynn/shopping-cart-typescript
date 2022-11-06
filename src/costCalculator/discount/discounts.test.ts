import { expect } from 'expect'
import { Discounts } from './discounts'
import { Items } from '../items'

describe('Discounts', () => {
  let discounts: Discounts

  describe('getDiscountTotal()', () => {
    // TODO: add tests with mocked Discount Implementations

    it('should return 0 for no discounts', () => {
      discounts = new Discounts([])
      expect(discounts.getDiscountTotal(new Items([]))).toEqual(0)
    })
  })
})
