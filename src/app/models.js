/**
 * @typedef {ReturnType<typeof Todo>} Todo
 */

/**
 * @param {string} description
 */
export const Todo = description => ({
    id: String(Date.now()),
    description,
    done: false,
});
