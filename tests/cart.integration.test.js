const { calculateTotal, applyDiscount, isValidItem } = require('../src/cart');

// INTEGRATION 1: валідація -> підрахунок -> знижка
test('Інтеграція: повний ланцюжок (валідація + підрахунок + знижка)', () => {
  const rawItems = [
    { price: 100, quantity: 2 }, // 200
    { price: 50, quantity: 1 }   // 50
  ];

  // 1) валідація всіх товарів
  const validItems = rawItems.filter(isValidItem);
  expect(validItems).toHaveLength(2);

  // 2) підрахунок суми валідних товарів
  const total = calculateTotal(validItems);
  expect(total).toBe(250);

  // 3) застосування знижки до суми
  const finalPrice = applyDiscount(total, 20);
  expect(finalPrice).toBe(200);
});

// INTEGRATION 2: невалідні товари не впливають на результат
test('Інтеграція: невалідні товари ігноруються при підрахунку', () => {
  const rawItems = [
    { price: 100, quantity: 1 },   // валідний -> 100
    { price: -5, quantity: 1 },    // невалідний (ціна)
    { price: 50, quantity: 2 },    // валідний -> 100
    { price: 30, quantity: 0 },    // невалідний (кількість)
    { price: 20, quantity: 1.5 }   // невалідний (дробова кількість)
  ];

  const validItems = rawItems.filter(isValidItem);
  expect(validItems).toHaveLength(2);

  const total = calculateTotal(validItems);
  expect(total).toBe(200);

  const finalPrice = applyDiscount(total, 25);
  expect(finalPrice).toBe(150);
});
