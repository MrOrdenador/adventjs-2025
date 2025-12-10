/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts: string[]): string[] {
  return gifts.filter(gift => !gift.includes('#')); // Me who only wanted to use "present" instead of "gift" :((
}