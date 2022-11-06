import { expect } from 'expect'
import { allItems, coffee, fruitTea, strawberries } from './__testUtils/data'
import { CostCalculator } from './index'
import { Items } from './items'

describe('ShoppingCart', () => {
  let costCalculator: CostCalculator

  describe('calculate()', () => {
    describe('No Discount', () => {
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
    describe('BuyOneGetOneFree (BOGOF)', () => {
      beforeEach(() => {
        costCalculator = new CostCalculator()
      })
      it('⭐️should apply BOGOF for two fruit teas', () => {
        expect(
          costCalculator.calculate(new Items([fruitTea, fruitTea]))
        ).toEqual(fruitTea.price)
      })
      it('should apply BOGOF for two fruit teas and ignore un-applicable items', () => {
        expect(
          costCalculator.calculate(
            new Items([fruitTea, fruitTea, strawberries, strawberries, coffee])
          )
        ).toEqual(
          fruitTea.price + // 👈 note that only the price of one fruit tea is expected
            strawberries.price +
            strawberries.price +
            coffee.price
        )
      })
    })
  })
})
