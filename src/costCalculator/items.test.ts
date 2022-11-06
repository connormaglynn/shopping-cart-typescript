import { expect } from 'expect'
import { allItems } from './__testUtils/data'
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
})
