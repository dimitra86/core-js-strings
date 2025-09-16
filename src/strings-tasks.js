/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  if (value == null) {
    return 0;
  }
  return value.length;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (value === undefined) {
    return false;
  }
  if (value == null) {
    return false;
  }

  if (value instanceof String) {
    return true;
  }
  if (typeof value === 'object') {
    return false;
  }
  // else if(value=={}){console.log (false);}
  if (typeof value === 'string') {
    return true;
  }
  return false;
}

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1, value2) {
  const str = value1.concat(value2);
  return str;
}

/**
 * Returns the first character of the given string.
 *
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  return value.charAt(0);
}

/**
 * Removes leading and trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  const str = value.trim();
  return str;
}

/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  const str = value.trimStart();
  return str;
}

/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  // const str = value.replace(/\s+$/, '');
  const str = value.trimEnd();
  return str;
}

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  if (times > 1) {
    return str.repeat(times);
  }
  if (times < 1) {
    return '';
  }
  return str;
}

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  const lastindex = str.indexOf(value);

  if (str.includes(value) === true) {
    return (
      str.slice(0, lastindex) + str.slice(lastindex + value.length, str.length)
    );
  }
  return str;
}

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  const lastindex = str.lastIndexOf(value);

  if (str.includes(value) === true) {
    return (
      str.slice(0, lastindex) + str.slice(lastindex + value.length, str.length)
    );
  }
  return str;
}

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  let sum = 0;
  // const nul = null;
  if (str === undefined) {
    return 0;
  }
  if (!str || str.length < 1) {
    return 0;
  }
  for (let i = 0; i < str.length; i += 1) {
    sum += str[i].charCodeAt();
  }
  return sum;
}

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  if (minutes < 10) {
    if (seconds < 10) {
      return `0${minutes}:0${seconds}`.padStart(2, '0');
    }
    return `0${minutes}:${seconds}`;
  }
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

/**
 * Returns a string in reverse order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  // throw new Error('Not implemented')
  return [...str].reverse().join('');
}

/**
 * Returns a string with characters in alphabetical order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(str, substring) {
  if (str.includes(substring) === true) {
    return true;
  }
  return false;
}

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  let num = 0;
  // const str='XYZ';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'a') {
      num += 1;
    }
    if (str[i] === 'e') {
      num += 1;
    }
    if (str[i] === 'i') {
      num += 1;
    }
    if (str[i] === 'o') {
      num += 1;
    }
    if (str[i] === 'u') {
      num += 1;
    }
    if (str[i] === 'y') {
      num += 1;
    }
    if (str[i] === 'A') {
      num += 1;
    }
    if (str[i] === 'E') {
      num += 1;
    }
    if (str[i] === 'I') {
      num += 1;
    }
    if (str[i] === 'O') {
      num += 1;
    }
    if (str[i] === 'U') {
      num += 1;
    }
    if (str[i] === 'Y') {
      num += 1;
    }
  }
  return num;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {boolean} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */

function isPalindrome(str) {
  const strClean = str
    .toLocaleLowerCase()
    .replace(/[.,/#!?$%^&*;:{}=\-_`~(' ')]/g, '')
    .split('')
    .join('');
  const strRev = str
    .toLocaleLowerCase()
    .replace(/[.,/#!?$%^&*;:{}=\-_`~(' ')]/g, '')
    .split('')
    .reverse()
    .join('');
  return strClean === strRev;
}

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  const arr = sentence.split(' ');
  // console.log (arr[0].length);

  let longWord = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (longWord.length < arr[i].length) {
      longWord = arr[i];
    }
  }

  return longWord;
}

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  const strRev = str.split(' ').reverse().join(' ');

  return strRev.split('').reverse().join('');
}

/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(str) {
  let strNew = '';
  for (let i = 0; i < str.length; i += 1) {
    // strNew=str.charAt(i);
    if (str[i] === str[i].toUpperCase()) {
      strNew += str[i].toLowerCase();
    } else {
      strNew += str[i].toUpperCase();
    }
    // console.log (str[i].toLowerCase());
  }

  return strNew;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  // const value='Hello, John Doe!';
  const arr = value.split(' ');
  const str = `${arr[1]} ${arr[2]}`;
  let strNew = '';
  for (let i = 0; i < str.length - 1; i += 1) {
    // if(str[i]=='!'){}
    strNew += str[i];
  }
  return strNew;
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  let strNew = '';
  for (let i = 1; i < str.length - 1; i += 1) {
    strNew += str[i];
  }
  return strNew;
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {string[]} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  const arr = str.split(';');
  return arr;
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  let str13 = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'A') {
      str13 += 'N';
    }
    if (str[i] === 'B') {
      str13 += 'O';
    }
    if (str[i] === 'C') {
      str13 += 'P';
    }
    if (str[i] === 'D') {
      str13 += 'Q';
    }
    if (str[i] === 'E') {
      str13 += 'R';
    }
    if (str[i] === 'F') {
      str13 += 'S';
    }
    if (str[i] === 'G') {
      str13 += 'T';
    }
    if (str[i] === 'H') {
      str13 += 'U';
    }
    if (str[i] === 'I') {
      str13 += 'V';
    }
    if (str[i] === 'J') {
      str13 += 'W';
    }
    if (str[i] === 'K') {
      str13 += 'X';
    }
    if (str[i] === 'L') {
      str13 += 'Y';
    }
    if (str[i] === 'M') {
      str13 += 'Z';
    }
    if (str[i] === 'N') {
      str13 += 'A';
    }
    if (str[i] === 'O') {
      str13 += 'B';
    }
    if (str[i] === 'P') {
      str13 += 'C';
    }
    if (str[i] === 'Q') {
      str13 += 'D';
    }
    if (str[i] === 'R') {
      str13 += 'E';
    }
    if (str[i] === 'S') {
      str13 += 'F';
    }
    if (str[i] === 'T') {
      str13 += 'G';
    }
    if (str[i] === 'U') {
      str13 += 'H';
    }
    if (str[i] === 'V') {
      str13 += 'I';
    }
    if (str[i] === 'W') {
      str13 += 'J';
    }
    if (str[i] === 'X') {
      str13 += 'K';
    }
    if (str[i] === 'Y') {
      str13 += 'L';
    }
    if (str[i] === 'Z') {
      str13 += 'M';
    }

    if (str[i] === 'a') {
      str13 += 'n';
    }
    if (str[i] === 'b') {
      str13 += 'o';
    }
    if (str[i] === 'c') {
      str13 += 'p';
    }
    if (str[i] === 'd') {
      str13 += 'q';
    }
    if (str[i] === 'e') {
      str13 += 'r';
    }
    if (str[i] === 'f') {
      str13 += 's';
    }
    if (str[i] === 'g') {
      str13 += 't';
    }
    if (str[i] === 'h') {
      str13 += 'u';
    }
    if (str[i] === 'i') {
      str13 += 'v';
    }
    if (str[i] === 'j') {
      str13 += 'w';
    }
    if (str[i] === 'k') {
      str13 += 'x';
    }
    if (str[i] === 'l') {
      str13 += 'y';
    }
    if (str[i] === 'm') {
      str13 += 'z';
    }
    if (str[i] === 'n') {
      str13 += 'a';
    }
    if (str[i] === 'o') {
      str13 += 'b';
    }
    if (str[i] === 'p') {
      str13 += 'c';
    }
    if (str[i] === 'q') {
      str13 += 'd';
    }
    if (str[i] === 'r') {
      str13 += 'e';
    }
    if (str[i] === 's') {
      str13 += 'f';
    }
    if (str[i] === 't') {
      str13 += 'g';
    }
    if (str[i] === 'u') {
      str13 += 'h';
    }
    if (str[i] === 'v') {
      str13 += 'i';
    }
    if (str[i] === 'w') {
      str13 += 'j';
    }
    if (str[i] === 'x') {
      str13 += 'k';
    }
    if (str[i] === 'y') {
      str13 += 'l';
    }
    if (str[i] === 'z') {
      str13 += 'm';
    }
    if (str[i] === ' ') {
      str13 += ' ';
    }
    if (str[i] === '?') {
      str13 += '?';
    }
    if (str[i] === '!') {
      str13 += '!';
    }
    if (str[i] === '.') {
      str13 += '.';
    }
    if (str[i] === ',') {
      str13 += ',';
    }
  }
  return str13;
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  if (value === 'A♣') {
    return 0;
  }
  if (value === '2♣') {
    return 1;
  }
  if (value === '3♣') {
    return 2;
  }
  if (value === '4♣') {
    return 3;
  }
  if (value === '5♣') {
    return 4;
  }
  if (value === '6♣') {
    return 5;
  }
  if (value === '7♣') {
    return 6;
  }
  if (value === '8♣') {
    return 7;
  }
  if (value === '9♣') {
    return 8;
  }
  if (value === '10♣') {
    return 9;
  }
  if (value === 'J♣') {
    return 10;
  }
  if (value === 'Q♣') {
    return 11;
  }
  if (value === 'K♣') {
    return 12;
  }
  if (value === 'A♦') {
    return 13;
  }
  if (value === '2♦') {
    return 14;
  }
  if (value === '3♦') {
    return 15;
  }
  if (value === '4♦') {
    return 16;
  }
  if (value === '5♦') {
    return 17;
  }
  if (value === '6♦') {
    return 18;
  }
  if (value === '7♦') {
    return 19;
  }
  if (value === '8♦') {
    return 20;
  }
  if (value === '9♦') {
    return 21;
  }
  if (value === '10♦') {
    return 22;
  }
  if (value === 'J♦') {
    return 23;
  }
  if (value === 'Q♦') {
    return 24;
  }
  if (value === 'K♦') {
    return 25;
  }
  if (value === 'A♥') {
    return 26;
  }
  if (value === '2♥') {
    return 27;
  }
  if (value === '3♥') {
    return 28;
  }
  if (value === '4♥') {
    return 29;
  }
  if (value === '5♥') {
    return 30;
  }
  if (value === '6♥') {
    return 31;
  }
  if (value === '7♥') {
    return 32;
  }
  if (value === '8♥') {
    return 33;
  }
  if (value === '9♥') {
    return 34;
  }
  if (value === '10♥') {
    return 35;
  }
  if (value === 'J♥') {
    return 36;
  }
  if (value === 'Q♥') {
    return 37;
  }
  if (value === 'K♥') {
    return 38;
  }
  if (value === 'A♠') {
    return 39;
  }
  if (value === '2♠') {
    return 40;
  }
  if (value === '3♠') {
    return 41;
  }
  if (value === '4♠') {
    return 42;
  }
  if (value === '5♠') {
    return 43;
  }
  if (value === '6♠') {
    return 44;
  }
  if (value === '7♠') {
    return 45;
  }
  if (value === '8♠') {
    return 46;
  }
  if (value === '9♠') {
    return 47;
  }
  if (value === '10♠') {
    return 48;
  }
  if (value === 'J♠') {
    return 49;
  }
  if (value === 'Q♠') {
    return 50;
  }
  if (value === 'K♠') {
    return 51;
  }
  if (value === 'A♣') {
    return 0;
  }
  return '';
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
