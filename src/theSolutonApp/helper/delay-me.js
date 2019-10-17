/**
 * Function delays Promise by provided ms. Can be used to slowing down UI reaction (removing UI blinking, etc)
 * @param delay: number - delay in ms
 * @returns Promise
 */

export const delayMe = (delay = 0) => (result) => new Promise(resolve => setTimeout(() => resolve(result), delay));
