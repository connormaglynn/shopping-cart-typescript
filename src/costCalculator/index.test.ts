import { expect } from 'expect'
import { allItems, coffee, fruitTea, strawberries } from './__testUtils/data'
import { CostCalculator } from './index'
import { Items } from './items'
import { BuyOneGetOneFree } from './discount/buyOneGetOneFree'
import { Discounts } from './discount/discounts'

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
        costCalculator.discounts = new Discounts([
          new BuyOneGetOneFree(fruitTea.productCode),
        ])
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

      // FIXME: 🐛 Presumably should not be able to add multiple of the same discount???
      describe.skip('🐛 duplicate fruit teas BOGOF discount', () => {
        beforeEach(() => {
          costCalculator.discounts = new Discounts([
            new BuyOneGetOneFree(fruitTea.productCode),
            new BuyOneGetOneFree(fruitTea.productCode),
          ])
        })
        it('should not duplicate application of discount', () => {
          expect(
            costCalculator.calculate(new Items([fruitTea, fruitTea]))
          ).toEqual(fruitTea.price)
        })
      })

      describe('multiple BOGOF Discounts', () => {
        beforeEach(() => {
          costCalculator.discounts = new Discounts([
            new BuyOneGetOneFree(fruitTea.productCode),
            new BuyOneGetOneFree(strawberries.productCode),
          ])
        })
        it('should apply multiple BOGOF discounts for different products', () => {
          expect(
            costCalculator.calculate(
              new Items([fruitTea, fruitTea, strawberries, strawberries])
            )
          ).toEqual(fruitTea.price + strawberries.price)
        })

        it('should ignore un-applicable products', () => {
          expect(
            costCalculator.calculate(
              new Items([
                fruitTea,
                fruitTea,
                strawberries,
                strawberries,
                coffee,
                coffee,
              ])
            )
          ).toEqual(
            fruitTea.price + strawberries.price + coffee.price + coffee.price
          )
        })
      })
    })
  })
})
