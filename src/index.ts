export type ExampleType = 'bob' | 'dave' | 'joe';

/**
 * logs the greeting to the console
 * @param {string} greeting - The greeting to log to the console
 * @returns {void}
 */
export function myHelloFunction(greeting: string): void {
  console.log(greeting);
}

/**
 * Adds two numbers together
 * @param {number} numA - first operand
 * @param {number} numB - second operand
 * @returns {number} result of adding the first operand and the second operand together
 */
export function add(numA: number, numB: number): number {
  return numA + numB;
}