import { describe, expect, test } from '@jest/globals';
import { 
  concatenateStrings, 
  getStringLength, 
  getStringFromTemplate, 
  getChar, 
  removeFirstOccurrences, 
  getRectangleString 
} from '../src/strings'; 

describe('Test suite for string manipulation functions', () => {
  
  // Тест для функции concatenateStrings
  test('concatenateStrings should remove spaces and concatenate two strings', () => {
    expect(concatenateStrings('aa', 'bb')).toBe('aabb');
    expect(concatenateStrings('aa', ' ')).toBe('aa');
    expect(concatenateStrings('', 'bb')).toBe('bb');
  });

  // Тест для функции getStringLength
  test('getStringLength should return the correct length of the string', () => {
    expect(getStringLength('test')).toBe(4);
    expect(getStringLength('')).toBe(0);
    expect(getStringLength('John Doe')).toBe(8);
  });

  // Тест для функции getStringFromTemplate
  test('getStringFromTemplate should return the correct string based on firstName and lastName', () => {
    expect(getStringFromTemplate('John', 'Doe')).toBe('Hello, John Doe!');
    expect(getStringFromTemplate('Chuck', 'Norris')).toBe('Hello, Chuck Norris!');
  });

  // Тест для функции getChar
  test('getChar should return the character at the given position in the string', () => {
    expect(getChar('John Doe', 1)).toBe('J');
    expect(getChar('cat', 3)).toBe('t');
  });

  // Тест для функции removeFirstOccurrences
  test('removeFirstOccurrences should remove the first occurrence of the substring', () => {
    expect(removeFirstOccurrences('To be or not to be', 'not')).toBe('To be or  to be');
    expect(removeFirstOccurrences('I like legends', 'end')).toBe('I like legs');
    expect(removeFirstOccurrences('ABABAB', 'BA')).toBe('ABAB');
  });

  // Тест для функции getRectangleString
  test('getRectangleString should return the correct string representation of the rectangle', () => {
    const expected = '*****\n*   *\n*   *\n*****\n'; 
    console.log('result at tests', getRectangleString(5, 4))
    console.log(expected)
    expect(getRectangleString(5, 4)).toBe(expected);
  });

});

