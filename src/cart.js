/**
 * Обчислює загальну вартість кошика.
 * @param {Array<{price: number, quantity: number}>} items
 * @returns {number}
 */
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * Застосовує знижку у відсотках до суми.
 * @param {number} total - сума до знижки
 * @param {number} percent - відсоток знижки (0-100)
 * @returns {number}
 */
function applyDiscount(total, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error('Invalid discount percent');
  }
  return total - (total * percent) / 100;
}

/**
 * Перевіряє, чи товар валідний для кошика.
 * @param {{price: number, quantity: number}} item
 * @returns {boolean}
 */
function isValidItem(item) {
  return Boolean(
    item &&
    typeof item.price === 'number' &&
    item.price > 0 &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

module.exports = { calculateTotal, applyDiscount, isValidItem };
