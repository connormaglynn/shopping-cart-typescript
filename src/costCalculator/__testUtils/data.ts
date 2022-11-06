import { Item, ProductCode } from '../model'

export const fruitTea = new Item(ProductCode.FR1, 'Fruit Tea', 3.11)
export const strawberries = new Item(ProductCode.SR1, 'Strawberries', 5.0)
export const coffee = new Item(ProductCode.CF1, 'Coffee', 11.23)
export const allItems = [fruitTea, strawberries, coffee]
