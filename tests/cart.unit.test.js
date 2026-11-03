const { calculateTotal, applyDiscount, isValidItem } = require('../src/cart');

// UNIT 1: calculateTotal — підрахунок суми кошика
test('calculateTotal: обчислює суму кошика', () => {
  const items = [
    { price: 100, quantity: 2 }, // 200
    { price: 50, quantity: 1 }   // 50
  ];
  expect(calculateTotal(items)).toBe(250);
});

test('calculateTotal: порожній кошик дає 0', () => {
  expect(calculateTotal([])).toBe(0);
});

// UNIT 2: applyDiscount — знижка
test('applyDiscount: застосовує 10% знижки', () => {
  expect(applyDiscount(200, 10)).toBe(180);
});

test('applyDiscount: кидає помилку на некоректний відсоток', () => {
  expect(() => applyDiscount(100, -5)).toThrow('Invalid discount percent');
  expect(() => applyDiscount(100, 150)).toThrow('Invalid discount percent');
});

// UNIT 3: isValidItem — валідація одного товару
test('isValidItem: валідний товар', () => {
  expect(isValidItem({ price: 10, quantity: 1 })).toBe(true);
});

test('isValidItem: невалідні товари', () => {
  expect(isValidItem({ price: -1, quantity: 1 })).toBe(false);  // ціна < 0
  expect(isValidItem({ price: 10, quantity: 0 })).toBe(false);  // кількість 0
  expect(isValidItem({ price: 10, quantity: 1.5 })).toBe(false); // не ціле
  expect(isValidItem(null)).toBe(false);                        // null
});
