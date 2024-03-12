export function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function currencyCapFormat(num) {
  return "$" + num;
}
// export default function currencyFormat(num) {
//   // Перевіряємо, чи число має лише два десяткових знаки
//   if (/^\d+(\.\d{1,2})?$/.test(num)) {
//     return "$" + num; // Повертаємо число без форматування, якщо воно має відповідний формат
//   } else {
//     return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); // Форматуємо число, якщо воно має більше двох десяткових знаків
//   }
// }
