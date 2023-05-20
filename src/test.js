// javascript => Javascript

// С помощью метода toUpperCase() и slice():
const word = 'javascript';
const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
console.log(capitalizedWord); // Выведет: Javascript

// С помощью метода replace() и регулярного выражения:
const word = 'javascript';
const capitalizedWord = word.replace(/^\w/, c => c.toUpperCase());
console.log(capitalizedWord); // Выведет: Javascript

// С помощью метода charAt() и конкатенации строк:
const word = 'javascript';
const capitalizedWord = word.charAt(0).toUpperCase() + word.substring(1);
console.log(capitalizedWord); // Выведет: Javascript

// Затем мы объединяем его с остальной частью слова, которую получаем с помощью slice(), substring() или replace()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "Hello world" => "heloWorld"
const inputString = 'Hello world';
const words = inputString.split(' ');

// Преобразование каждого слова, кроме первого
for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const modifiedWord = word.charAt(0).toLowerCase() + word.slice(1);
    words[i] = modifiedWord;
}

const outputString = words.join('');
console.log(outputString);  // Выведет: heloWorld
