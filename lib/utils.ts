/**
 * Generates a unique ID based on the current time and a random number.
 * @returns
 */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * Generates an uppercase unique ID.
 * @returns {string} The ID, with an optional prefix.
 */
export function generateID(prefix = "") {
  const uuid = uid().toUpperCase();
  return `${prefix}${uuid}`;
}
