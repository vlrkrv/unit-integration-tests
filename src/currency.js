/**
 * Перетворює рядок з валютою на число.
 * @param {string} value - Наприклад, "$50".
 * @returns {number} - Наприклад, 50.
 */
function parseCurrency(value) {
  return parseFloat(value.replace('$', ''));
}

/**
 * Форматує число у формат валюти.
 * @param {number} value - Наприклад, 100.
 * @returns {string} - Наприклад, "$100.00".
 */
function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

/**
 * Додає два значення валюти.
 * @param {string} value1 - Наприклад, "$50".
 * @param {string} value2 - Наприклад, "$30".
 * @returns {string} - Наприклад, "$80.00".
 */
function addCurrencies(value1, value2) {
  const num1 = parseCurrency(value1);
  const num2 = parseCurrency(value2);
  return formatCurrency(num1 + num2);
}

module.exports = { parseCurrency, formatCurrency, addCurrencies };
