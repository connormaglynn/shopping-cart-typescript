![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![ESLINT](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

# shopping-cart-typescript

Shopping Cart Scenario For a Senior Developer Interview. Written in Typescript.

## Shopping Cart Checkout Scenario

[Original Scenario File](assets/Supermarket.pdf)

### Problem Description

In our quest to stay in touch with what's going on in the commercial world we've
decided to open a supermarket - we sell only three products:

| Product code | Name         | Price  |
|--------------|--------------|--------|
| FR1          | Fruit Tea    | £3.11  |
| SR1          | Strawberries | £5.00  |
| CF1          | Coffee       | £11.23 |

Our CEO is a big fan of buy-one-get-one-free offers. She wants us to add a rule to
apply this rule to fruit tea.

The COO, though, likes low prices and wants people buying strawberries to get a
price discount for bulk purchases. If you buy 3 or more strawberries, the price should
drop to £4.50 each.

Our checkout can scan items in any order.

The CEO and COO change their minds often, so ideally this should be a flexible
solution (if you have time). For example, we might want to apply the offers to
different products, or add products to our range, as the supermarket grows.

### Task

Your goal is to implement a checkout that scans items in and calculates total prices
correctly for any combination of the products and offers above.

After your interview, you’ll be asked to talk through your code, and share your screen
to demonstrate it. Don’t worry about using databases or a front end.
Please don’t spend more than an hour or two on this. An incomplete solution is ok,
we can talk through how you’d extend your solution at the interview. Thank you, and
good luck!

---

## 🙋 My Approach

### 💡 Initial Ideas

To complete the above task, I think it best to define a single (and simple) purpose for the application and start there.

From reading the task, I assume that the fundamental component of the system is to loop through a list of items and
return the total of all prices.

Due to this, I believe that this system would be better described as a `CostCalculator` rather than a `ShoppingCart` or
a `Checkout`.

That being said, I understand that describing it as a `CostCalculator` sheds responsibility of individually
scanning/adding items into the system. Though I believe this is a fair compromise to keep the context well-defined and the interface simple.

After completing the single purpose of the system, I will look to add in the extra functionality of the different
discounts as defined (BOGOF and BulkPurchases)

#### ✅ Checklist

- [x] ✨ Add `CostCalculator` which returns total given a list of items
- [ ] ♻️ Refactor `CostCalculator` for flexibility
- [ ] ✨ Add a `Buy One Get One Free (BOGOF) for Fruit Tea` discount mechanism
- [ ] ♻️ Refactor `Buy One Get One Free (BOGOF)` discount mechanism for flexibility of other products
- [ ] ✨ Add a `BulkBuy For Strawberries` discount mechanism
- [ ] ♻️ Refactor `BulkBuy` discount mechanism for flexibility of other products
