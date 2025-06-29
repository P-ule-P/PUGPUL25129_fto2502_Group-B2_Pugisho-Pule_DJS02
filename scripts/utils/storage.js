/**
 * Utility for interacting with localStorage.
 * @module utils/storage
 */
export const storage = {
  /**
   * Save data to localStorage.
   * @param {string} key - The key to store under.
   * @param {*} value - The data to stringify and store.
   */
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * Load data from localStorage.
   * @param {string} key - The key to retrieve.
   * @returns {*} - Parsed data or null if not found.
   */
  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  /**
   * Remove data from localStorage.
   * @param {string} key - The key to remove.
   */
  remove(key) {
    localStorage.removeItem(key);
  },
};
